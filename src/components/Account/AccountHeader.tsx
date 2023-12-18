import Link from "next/link";
import React from "react";

const AccountHeader = () => {
  return (
    <div className="account-header">
      <Link href="/">
      <img src="/images/logo-Igralishte.png" alt="" />
      </Link>
    </div>
  );
};

export default AccountHeader;
