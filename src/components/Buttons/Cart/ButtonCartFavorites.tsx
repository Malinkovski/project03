import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ShoppingCartSvg from "/public/images/icons/shoppingcart.svg";
import HeartSvg from "/public/images/icons/heart.svg";

interface ButtonProps {
  cartAmount: number;
  favoritesAmount: number;

}

const ButtonCartFavorites = ({
  cartAmount, 
  favoritesAmount, 
}: 
ButtonProps) => {
  const [selected, setSelected] = useState(true);
  const router = useRouter();

  const onLeftClick = () => {
    router.push("/cart");
    setSelected(true);
  };
  const onRightClick = () => {
    router.push("/favorites");
    setSelected(false);
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === "/cart") {
        setSelected(true);
      } else if (url === "/favorites") {
        setSelected(false);
      }
    };
    handleRouteChange(router.pathname);
  }, [router.pathname === "/cart", router.pathname === "/favorites"]);

  return (
    <div className="">
      <div className="cart-favorites-button">
        <div
          className={`cart button ${selected ? "active" : ""}`}
          onClick={onLeftClick}
        >
          <ShoppingCartSvg className="svg-small"/>
          <span>
            Кошничка {"("}
            {cartAmount !== 0 ? cartAmount : "0"}
            {")"}
          </span>
        </div>
        <div
          className={`favorites button ${!selected ? "active" : ""}`}
          onClick={onRightClick}
        >
          <HeartSvg className="svg-small"/>
          <span>
            Омилени {"("}
            {favoritesAmount !== 0 ? favoritesAmount : "0"}
            {")"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ButtonCartFavorites;
