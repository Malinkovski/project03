import { GetServerSideProps } from "next";
import { DetailedProductProps } from "../../properties/products";
import {
  LIMIT_ITEMS_PER_SMALL_PAGINATION,
  PRODUCTS_API,
} from "../../properties/variables";
import ProductBreadCrumbs from "../../components/Breadcrumbs/ProductBreadCrumbs";
import DetailedProductCard from "../../components/Cards/DetailedCard/DetailedProductCard";
import Policy from "../../components/Misc/Policy";
import ListLimitedProducts from "../../components/ListProducts/ListLimitedProducts";
import Head from "next/head";

interface ProductDetailProps {
  product: DetailedProductProps;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const productBreadCrumbs = [
    { name: "Почетна", href: "/" },
    { name: product.type, href: `/products?type_id_like=${product.type_id}` },
    {
      name: product.category,
      href: `/products?type_id_like=${product.category_id}`,
    },
    //{ name: product.name, href: `/products/${product.id}` },
  ];
  return (
    <>
      <Head>
        <title>{`Игралиште - ${product.name}`}</title>
        <meta name="detailed product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="container">
          <ProductBreadCrumbs customCrumbs={productBreadCrumbs} />
          <DetailedProductCard product={product} />
          <Policy />
          <ListLimitedProducts
            title="Други парчиња"
            apiUrl={PRODUCTS_API}
            query={product.category}
            ItemsPerPage={LIMIT_ITEMS_PER_SMALL_PAGINATION}
            shuffle={true}
          />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (query) => {
  try {
    const { id } = query.params as {
      id: string;
    };

    const res = await fetch(`${PRODUCTS_API}/${id}`);
    const product = await res.json();

    if (!res.ok) {
      throw new Error(`Error fetching data from ${PRODUCTS_API}/${id}`);
    }

    return {
      props: { product },
    };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};
