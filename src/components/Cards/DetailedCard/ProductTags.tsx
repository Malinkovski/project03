import React from "react";
import { DetailedProductProps } from "../../../properties/products";
import Link from "next/link";

interface ProductTagsProps {
    product: DetailedProductProps
}

const ProductTags = ({product}:ProductTagsProps) => {

    return (
        <div className="product-tags">
        <h3>Ознаки:</h3>
        <div className="tags">
          {product.tags.map((tag, index) => (
            <Link
              href={`/products?tags_like=${tag}`}
              className="tag"
              key={index}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    );
}

export default ProductTags;