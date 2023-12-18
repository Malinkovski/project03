import type { NextPage } from "next";
import Head from "next/head";
import PageTitle from "../components/PageCommon/PageTitle";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import ButtonGiftCard from "../components/Buttons/ButtonGiftCard";
import { GiftCardPageProps } from "../properties/cards";
import { GIFTCARD_API } from "../properties/variables";
import fetchData from "../utilities/fetch-data";
import EightStarSvg from "/public/images/icons/emojione-monotone_eight-pointed-star.svg";

const GiftCardPage: NextPage<GiftCardPageProps> = (data) => {
  const { giftcard_page_title, special_gift_cards, gift_cards } = data;
  


  return (
    <>
      <Head>
        <title>{`Игралиште - ${giftcard_page_title}`}</title>
        <meta name="giftcards store page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="info gift-cards-content">
        <div className="container">
          <Breadcrumbs />
          <PageTitle hideSparks={true} title={giftcard_page_title} />
          <div className="content">
            <ul className="special-gift-cards">
              {special_gift_cards.map((specialgiftCard) => (
                <li key={specialgiftCard.id}>
                  <div
                    className="content-image special-gift-card"
                    style={{
                      backgroundImage: `url(${specialgiftCard.image})`,
                    }}
                  ></div>
                  <div className="gift-card-ribbon">
                    <span>{specialgiftCard.title}</span>
                    <EightStarSvg />
                  </div>
                </li>
              ))}
            </ul>
            <div className="content-text">
              <h2>Одбери цена на подарок картичка:</h2>
              <ul className="go-to-cart">
                {gift_cards.map((giftcard) => (
                  <li key={giftcard.id}>
                    <ButtonGiftCard price={giftcard.price} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return await fetchData(GIFTCARD_API);
}

export default GiftCardPage;
