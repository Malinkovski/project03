import React from "react";
import { CartItem, MinimalProductProps } from "../../properties/products";
import { calcPriceDiscount } from "../../utilities/calc-sale";

interface SalePricesProps {
  products: MinimalProductProps[];
  cart: CartItem[];
}

const SalePrices = ({ products, cart }: SalePricesProps) => {
  const getTotalDiscount = (): number => {
    if (cart.length !== products.length) {
      return 0;
    }
    return products.reduce(
      (acc, product, i) =>
        acc +
        (product.sale
          ? product.price * cart[i].productQuantity -
            calcPriceDiscount(product.price, product.discount) *
              cart[i].productQuantity
          : 0),
      0
    );
  };

  if (products.filter((product) => product.sale).length === 0) return null;

  return (
    <>
      {products.filter((product) => product.sale).length !== 0 && (
        <li className="sale">
          <div className="sale-info">
            <span>
              {products.filter((product) => product.sale).length} x Попуст!
            </span>
          </div>
          <span>- {getTotalDiscount()} ден.</span>
        </li>
      )}
    </>
  );
};

export default SalePrices;
