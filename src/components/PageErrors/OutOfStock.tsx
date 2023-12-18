import Link from "next/link";
import React from "react";

interface OutOfStock{
  text: string;
}

const OutOfStock = ({text}:OutOfStock) => {
  return (
    <div className="out-of-stock page-warnings">
      <h1 className="text-align-center">{text}</h1>
      <Link href={"/products"}>
        <span>Кон продукти</span>
      </Link>
    </div>
  );
};

export default OutOfStock;