import type { NextPage } from "next";
import Head from "next/head";
import { BrandProps } from "../../properties/pageprops";
import Breadcrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import CardWithCircleBadge from "../../components/Cards/CardWithCircleBadge";
import { LOCAL_BRANDS_API } from "../../properties/variables";

interface BrandListProps {
  brands: BrandProps[];
}

const Brand: NextPage<BrandListProps> = ({ brands }) => {
  return (
    <>
      <Head>
        <title>Игралиште - Брендови</title>
        <meta name="local brands page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="info brand home-page">
          <div className="container">
            <Breadcrumbs />
            <>
              {/* //!TEMP PLACEHOLDER FOR LISTING ALL BRANDS  */}
              {brands.slice(0).map((brand, index) => (
                <div
                  key={brand.id}
                  className={`img-container ${
                    index % 2 === 0
                      ? "bot-img"
                      : `top-img ${
                          index === brands.length - 1 && index % 2 !== 0
                            ? "no-bg"
                            : "reverse-bg"
                        }`
                  }`}
                >
                  <CardWithCircleBadge
                    backgroundUrl={brand.image}
                    header={brand.name}
                    text="Види повеќе за брендот"
                    href={`local_brands/${brand.id}`}
                  />
                </div>
              ))}
            </>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(LOCAL_BRANDS_API);
  const data = await res.json();

  return {
    props: {
      brands: data,
    },
  };
}

export default Brand;

/* 
          {home_ads.slice(1).map((ad, index) => (
            <div
              key={ad.id}
              className={`img-container ${
                index % 2 === 0
                  ? "bot-img"
                  : `top-img ${
                      index === home_ads.length - 1 - 1 && index % 2 !== 0
                        ? "no-bg"
                        : "reverse-bg"
                    }`
              }`} //alternate between top-img and bot-img + reverse-bg
              //if its last of array remove background with no-bg
            >
              <CardWithCircleBadge
                backgroundUrl={ad.image}
                header={ad.title}
                text={ad.text}
              />
            </div>
          ))}
*/

/* 

            {brands.map((brand) => (
              <Link key={brand.id} href={`/brands/${brand.id}`}>
                <PageTitle title={brand.name} />
                <div className="content">
                  <div
                    className="content-image"
                    style={{ backgroundImage: `url(${brand.image})` }}
                  >
                    
//                    </div>
//                    </div>
//                  </Link>
//                ))}
//*/
