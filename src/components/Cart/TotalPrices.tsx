import React from "react";
import { CartItem, MinimalProductProps } from "../../properties/products";
import { calcPriceDiscount } from "../../utilities/calc-sale";

interface TotalPricesProps {
  products: MinimalProductProps[];
  cart: CartItem[];
  giftcards: number[];
  deliveryFee: number;
}

const TotalPrices = ({
  products,
  giftcards,
  cart,
  deliveryFee,
}: TotalPricesProps) => {
  if (cart.length !== products.length) return null;

  return (
    <div className="total-price">
      <span>Вкупно:</span>
      <span className="price">
        {products.reduce(
          (acc, product, i) =>
            acc +
            (product.sale
              ? calcPriceDiscount(product.price, product.discount)
              : product.price) *
              cart[i].productQuantity,
          0
        ) +
          giftcards.reduce((acc, giftcardAmount) => acc + giftcardAmount, 0) +
          (products.length !== 0 ? deliveryFee : 0)}
        ден.
      </span>
    </div>
  );
};

export default TotalPrices;
