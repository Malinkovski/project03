import React from "react";
import { DetailedProductProps } from "../../../properties/products";

interface ProductSizeProps {
  product: DetailedProductProps;
}

const ProductSize = ({product}:ProductSizeProps) => {

    return(
        <div className="product-size">
        <div className="size-container">
          <h3>Величина:</h3>
          <h4 className="size-number">{product.size}</h4>
          {product.quantity > 1 ? (
            <p>{`*достапни парчиња: ${product.quantity}`}</p>
          ) : (
            <p>*само 1 парче</p>
          )}
        </div>
        <p>{product.size_description}</p>
        <p className="link">види ги димензиите</p> {/* //!?LINK? */}
      </div>
    )

}

export default ProductSize;