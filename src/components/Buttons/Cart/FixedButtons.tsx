import React from "react";
import HeartFullSvg from "/public/images/icons/heart-full.svg";
import HeartSvg from "/public/images/icons/heart.svg";
import CartSvg from "/public/images/icons/cart.svg";

interface fixedButtonsProps {
  handleAddToCart: () => void;
  handleAddToFavorites: () => void;
  isFavorite: boolean;
}

const fixedButtons = ({
  handleAddToCart,
  handleAddToFavorites,
  isFavorite,
}: fixedButtonsProps) => {
  return (
    <div className="fixed-buttons-container">
      <button
        title="favorite-button"
        onClick={handleAddToFavorites}
        className="button-add-to-favorites"
      >
        {isFavorite ? (
          <HeartFullSvg className="svg-small svg-animate-scale-simple" />
        ) : (
          <HeartSvg className="svg-small svg-animate-scale-simple" />
        )}
      </button>
      <button
        title="cart-button"
        onClick={handleAddToCart}
        className="button-add-to-cart-small"
      >
        <CartSvg className="svg-small svg-animate-scale-simple" />
      </button>
    </div>
  );
};

export default fixedButtons;
