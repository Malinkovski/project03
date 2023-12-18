import React from "react";

interface GiftCardPricesProps {
  giftcards: number[];
}

const GiftCardPrices = ({ giftcards }: GiftCardPricesProps) => {
  return (
    <>
      {giftcards.map((giftcardAmount, index) => (
        <li key={`${index}`}>
          <span>Подарочна картичка</span>
          <span className="price">{giftcardAmount} ден.</span>
        </li>
      ))}
    </>
  );
};

export default GiftCardPrices;
