import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import PageTitle from "../../components/PageCommon/PageTitle";
import Breadcrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import { BrandProps } from "../../properties/misc";
import ListLimitedProducts from "../../components/ListProducts/ListLimitedProducts";
import { LIMIT_ITEMS_PER_SMALL_PAGINATION, LOCAL_BRANDS_API, PRODUCTS_API } from "../../properties/variables";

interface CurrentBrandProps {
  brand: BrandProps;
}

const Brand = ({ brand }:CurrentBrandProps) => {
  return (
    <>
      <Head>
        <title>{`Игралиште - ${brand.name}`}</title>
        <meta name="detailed local brand page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="info brand">
        <div className="container">
          <Breadcrumbs />
          <PageTitle title={brand.name} />
          <div className="content">
            <div
              className="content-image content-w-50-image"
              style={{ backgroundImage: `url(${brand.image})` }}
            >
              {/* BGImg */}
            </div>
            <div className="content-text">
              <p className="drop-down-text">{brand.text}</p>
            </div>
          </div>
          
          <ListLimitedProducts
            apiUrl={PRODUCTS_API}
            title={`Парчиња од брендот`}
            fromTags={[brand.name.toLocaleLowerCase()]}
            ItemsPerPage={LIMIT_ITEMS_PER_SMALL_PAGINATION}
          />
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(LOCAL_BRANDS_API);
  const brands = await response.json();

  const paths = brands.map((brand: BrandProps) => ({
    params: { id: brand.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CurrentBrandProps> = async ({
  params,
}) => {
  const brandId = params?.id as string;
  const response = await fetch(`${LOCAL_BRANDS_API}/${brandId}`);
  const data = await response.json();

  return {
    props: {
      brand: data,
    },
  };
};

export default Brand;
