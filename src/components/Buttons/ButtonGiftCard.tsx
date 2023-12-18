import { useState } from "react";
import ButtonToCart from "./Cart/ButtonToCart";
import { useCartFavoritesContext } from "../../context/CartFavoritesContext";

interface ButtonGiftCardProps {
  price: number;
}


const ButtonGiftCard = ({ price }: ButtonGiftCardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const { setGiftcards} = useCartFavoritesContext();

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    const giftCards = localStorage.getItem("giftcards");
    const GiftCardsArray = giftCards ? JSON.parse(giftCards) : [];
    GiftCardsArray.push(price);
    localStorage.setItem("giftcards", JSON.stringify(GiftCardsArray));
    setGiftcards(GiftCardsArray);
  };

  return (
    <>
      {!isClicked ? (
        <button
          className="button button-pink price"
          onClick={handleButtonClick}
        >
          <span>{price} ден.</span>
        </button>
      ) : (
        <ButtonToCart />
      )}
    </>
  );
};

export default ButtonGiftCard;
