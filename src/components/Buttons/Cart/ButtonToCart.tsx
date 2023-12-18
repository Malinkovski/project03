import Link from "next/link";
import React from "react";
import FourStarSvg from "/public/images/icons/four-point-star.svg";

const ButtonToCart = () => {
  return (
    <button className="button button-pink pink-clicked">
      <Link href="/cart">
        <span>
          <FourStarSvg className="four-star big-four-star" />
          Додадено
          <FourStarSvg className="four-star small-four-star" />
        </span>
        <h6>кон кошничката &rarr;</h6>
      </Link>
    </button>
  );
};

export default ButtonToCart;
