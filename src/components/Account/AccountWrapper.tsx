import React from "react";
import useShowHeaderAndFooter from "../../customhooks/useShowHeaderAndFooter";
import Header from "../PageCommon/Header/Header";
import Footer from "../PageCommon/Footer/Footer";
import AccountHeader from "./AccountHeader";
import CopyRight from "../PageCommon/Footer/Copyright";

interface AccountWrapperProps {
  children: React.ReactNode;
}

const AccountWrapper = ({ children }: AccountWrapperProps) => {
  const { isDesktop } = useShowHeaderAndFooter();

  return (
    <>
      {isDesktop && <Header />}
      <section className="account-container">
        <div className="account-inner-container">

        {!isDesktop && <AccountHeader />}
        {children}
        </div>
        <CopyRight className="account-cr" />
      </section>
      {isDesktop && <Footer />}
    </>
  );
};

export default AccountWrapper;
