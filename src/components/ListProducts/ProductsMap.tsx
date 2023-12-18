import React from "react";
import SimpleProductCard from "../Cards/SimpleProductCard";
import { MinimalProductProps } from "../../properties/products";
import OutOfStock from "../PageErrors/OutOfStock";

interface ProductsProps {
  products: MinimalProductProps[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="list-products">
      <div className="products">
        {products.map((product, index: number) => (
          //!TEMP INDEXING CUZ OF DIPLICATED ID IN BD.JSON
          <SimpleProductCard key={index} product={product} />
        ))}
      </div>
      {!(products.length > 0) && (
            <OutOfStock text="Нема достапни производи за оваа категорија." />
          )}
    </div>
  );
};

export default Products;
