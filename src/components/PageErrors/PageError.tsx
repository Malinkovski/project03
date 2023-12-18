import Link from "next/link";
import React from "react";

const PageError = () => {
  return (
    <div className="page-warnings">
      <h1 className="text-align-center">Непостоечка страница на Игралиште!</h1>
      <Link href={"/"}>
        <h5>Кон почетна</h5>
      </Link>
    </div>
  );
};

export default PageError;