import React from "react";
import { DetailedProductProps } from "../../../properties/products";

interface ProductDescriptionProps {
  product: DetailedProductProps;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <div className="product-description">
    <div className="product-color">
      <h3>Боја:</h3>
      <div
        className="color"
        style={{ background: product.color_value }}
      ></div>
      <span>{product.color}</span>
    </div>
    <div className="product-material">
      <h3>Материјал:</h3>
      <span>{product.material}</span>
      <span>Постава: {product.material}</span>
    </div>
    <div className="product-condition">
      <h3>Состојба:</h3>
      <h4>{product.condition}/10</h4>
      <p className="link">прочитај повеќе</p> {/* //!?LINK? */}
    </div>
    <div className="product-care">
      <h3>Насоки на одржување:</h3>
      <p>{product.care_description}</p>
    </div>
  </div>
  );
};

export default ProductDescription;