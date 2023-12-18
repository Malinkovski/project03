import Link from "next/link";

interface customCrumbProps {
  name: string;
  href: string;
}

interface ProductBreadcrumbsProps {
  customCrumbs: customCrumbProps[];
}

const ProductBreadCrumbs = ({ customCrumbs }: ProductBreadcrumbsProps) => {
  return (
    <>
      <div className="breadcrumbs">
        {customCrumbs.map((crumb: customCrumbProps, index) => (
          <Link className="breadcrumb" key={index} href={crumb.href}>
            <span >{crumb.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductBreadCrumbs;
