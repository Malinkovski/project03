import type { NextPage } from "next";
import CarouselHome from "../components/Carousel/CarouselHome";
import GiftCardWithCircleBadge from "../components/Cards/GiftCardWithCircleBadge";
import CardWithCircleBadge from "../components/Cards/CardWithCircleBadge";
import { AdvertisementProps } from "../properties/misc";
import Head from "next/head";
import { ADS_API } from "../properties/variables";
import fetchData from "../utilities/fetch-data";

interface AdProps {
  home_ads: AdvertisementProps[];
}

const Home: NextPage<AdProps> = (data) => {
  const { home_ads } = data;
  return (
    <>
      <Head>
        <title>Игралиште</title>
        <meta name="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      


      <section className="home-page">
        {/* //? can be done with mapping depending on how many ads */}
        <div className="container">
          <div className="img-container top-img new-tag">
            <CardWithCircleBadge
              backgroundUrl={home_ads[0].image}
              header={home_ads[0].title}
              text={home_ads[0].text}
              href={`products?tags_like=${home_ads[0].ad_tag}`}
            />
          </div>
          <CarouselHome />
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
                href={`products?tags_like=${ad.ad_tag}`}
              />
            </div>
          ))}
          <div className="giftcard-container">
            <GiftCardWithCircleBadge
              backgroundUrl="/images/img-home-3.jpg"
              header="Gift cards"
              text="Избери уникатен подарок за твоите најблиски сo нашиот избор
              на ultra fancy картички за подарок."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return await fetchData(ADS_API);
}

export default Home;
