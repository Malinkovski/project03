import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ACCESSORIES_API, LOCAL_BRANDS_API, VINTAGE_API, customStaticCrumbNames } from "../../properties/variables";

interface CrumbNameProps {
  [key: string]: string;
}

interface BreadcrumbsProps {
  excludeLast?: boolean;
}

const Breadcrumbs = ({ excludeLast }: BreadcrumbsProps) => {
  const router = useRouter();

  const [crumbNames, setCrumbNames] = useState<CrumbNameProps>(customStaticCrumbNames);

  useEffect(() => {
    const fetchFormatData = async (url: string): Promise<CrumbNameProps> => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        const formattedData: CrumbNameProps = data.reduce(
          (acc: CrumbNameProps, item: { id: string; name: string }) => ({
            ...acc,
            [item.id]: item.name,
          }),
          {}
        );

        return formattedData;
      } catch (error) {
        console.error(error);
        return {};
      }
    };

    const fetchDataAndUpdateState = async () => {

      const brandsData = await fetchFormatData(LOCAL_BRANDS_API);
      const accessoriesData = await fetchFormatData(ACCESSORIES_API);
      const vintageData = await fetchFormatData(VINTAGE_API);

      setCrumbNames((crumbNames) => ({
        ...crumbNames,
        ...brandsData,
        ...accessoriesData,
        ...vintageData,
      }));
    };

    fetchDataAndUpdateState();
  }, [customStaticCrumbNames]);


  const urlParts = router.asPath
    .split("?")[0]
    .split("/")
    .filter((part) => part !== "");

  const crumbs = urlParts.map((part, index) => {
    if (excludeLast && index === urlParts.length - 1) {
      return null; // skip last crumb
    }

    const path = `/${urlParts.slice(0, index + 1).join("/")}`;
    const crumb = crumbNames[part] || part.replace(/-/g, " ");

    return (
      <div key={part} className="breadcrumb">
        <Link href={path} as={path}>
          {crumb}
        </Link>
      </div>
    );
  });

  return (
    <div className="breadcrumbs">
      <Link className="breadcrumb" href="/">
        Почетна
      </Link>

      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
