import React, { useEffect, useState } from "react";
import ButtonToCart from "../../Buttons/Cart/ButtonToCart";
import { useRouter } from "next/router";
import HeartFullSvg from "/public/images/icons/heart-full.svg";
import HeartSvg from "/public/images/icons/heart.svg";

interface DetailedCardButtonsProps {
  handleAddToCart(): void;
  handleAddToFavorites(): void;
  isFavorite: boolean;
  isInCart: boolean;
}

const DetailedCardButtons = ({
  handleAddToCart,
  handleAddToFavorites,
  isFavorite,
  isInCart,
}: DetailedCardButtonsProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setIsClicked(false);
  }, [router.query.id]);

  return (
    <div className="buttons go-to-cart">
      {!isClicked && !isInCart ? (
        <button
          onClick={() => {
            handleAddToCart(), setIsClicked(true);
          }}
          className=" button button-pink button-add-to-cart-big "
        >
          <span>Додај во кошничка</span>
        </button>
      ) : (
        <ButtonToCart />
      )}

      <div
        onClick={handleAddToFavorites}
        className="button button-add-to-favorites"
      >
        {isFavorite ? (
          <HeartFullSvg className="svg-small" />
        ) : (
          <HeartSvg className="svg-small" />
        )}
      </div>
    </div>
  );
};

export default DetailedCardButtons;
