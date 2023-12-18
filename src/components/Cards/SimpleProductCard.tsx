import Link from "next/link";
import React from "react";
import { MinimalProductProps } from "../../properties/products";
import { calcPriceDiscount } from "../../utilities/calc-sale";
import useFavorites from "../../customhooks/useFavorites";
import HeartSvg from "/public/images/icons/heart.svg";
import HeartFullSvg from "/public/images/icons/heart-full.svg";

interface SimpleProductCardProps {
  product: MinimalProductProps;
}

const SimpleProductCard = ({ product }: SimpleProductCardProps) => {
  const productLink = `/products/${product.id}`;
  const { isFavorite, handleAddToFavorites } = useFavorites(product.id);

  return (
    <div className="card">
      <div className="inner-card">
        <Link href={productLink}>
          <div className="img-container">
            <img src={product.images[0]} alt="example" />
          </div>
        </Link>
        <div className="flex-c">
          <span>{product.name} </span>

          {product.sale ? (
            <>
              <span className="price">
                <span className="scratched">{product.price}</span> ден.
              </span>
              <span className="price">
                <span className="sale">
                  {calcPriceDiscount(product.price, product.discount)} ден.
                </span>
              </span>
            </>
          ) : (
            <span className="price">{product.price} ден.</span>
          )}
        </div>
        
      </div>
      <div
              onClick={handleAddToFavorites}
              className="favorite-card-button"
            >
              {isFavorite ? <HeartFullSvg/> : <HeartSvg />}
            </div>
    </div>
  );
};

export default SimpleProductCard;
