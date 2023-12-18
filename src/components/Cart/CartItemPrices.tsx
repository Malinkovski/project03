import React from "react";
import { calcPriceDiscount } from "../../utilities/calc-sale";
import { CartItem, MinimalProductProps } from "../../properties/products";

interface CartItemPricesProps {
  products: MinimalProductProps[];
  cart: CartItem[];
}

const CartItemPrices = ({ products, cart }: CartItemPricesProps) => {

  if(cart.length !== products.length) return null;
  return (
    <>
      {
        products.map((product, i) => (
          <li key={product.id}>
            <span>
              {cart[i].productQuantity} x {product.name}
            </span>
            <span className="price">
              {product.sale
                ? calcPriceDiscount(product.price, product.discount) *
                  cart[i].productQuantity
                : product.price * cart[i].productQuantity}
              ден.
            </span>
          </li>
        ))}
    </>
  );
};

export default CartItemPrices;
