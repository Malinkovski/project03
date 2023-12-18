import React from "react";
import Link from "next/link";
import Ribbon from "./Ribbon";
import Navigation from "../../Navbar/Navigation";
import { useNavigationContext } from "../../../context/NavigationContext";
import Search from "../../Searchbar/Search";
import BurgerSvg from "/public/images/icons/burger-menu.svg";
import SearchSvg from "/public/images/icons/fluent_search-48-regular.svg";

const Header = () => {
  const {
    setCloseNavbar,
    closeNavbar,
    setCloseSearchbar,
    isFilterNavActive,
    setIsFilterNavActive,
    showPurchaseModal,
    setShowPurchaseModal,
  } = useNavigationContext();
  const toggleNavbar = () => setCloseNavbar(!closeNavbar);
  const closeNavbarMenu = () => setCloseNavbar(true);
  const openSearchbarMenu = () => setCloseSearchbar(false);
  const closeFilterBar = () => {
    setIsFilterNavActive(false);
  };
  const closePurchaseModal = () => setShowPurchaseModal(false);
  
  return (
    <>
      <header>
        <div className="navigation">
        </div>
        <div className="header">
          <BurgerSvg
            onClick={() => {
              toggleNavbar(),
              isFilterNavActive && closeFilterBar(),
              showPurchaseModal && closePurchaseModal();
            }}
            className="burger burger-svg svg-animate-scale-simple svg-sparks"
          /> 
          <div className="burger-ph"></div>
          <Link className="main-logo" href="/">
            <img src="/images/logo-Igralishte.png" alt="logo" />
          </Link>
          <div
            onClick={() => {
              if (!closeNavbar) {
                closeNavbarMenu();
              }
              openSearchbarMenu();
              isFilterNavActive && closeFilterBar(),
              showPurchaseModal && closePurchaseModal();
            }}
            className="search"
          >
            <SearchSvg className="search-svg svg-animate-scale-simple" />
          </div>
        </div>
        <Ribbon /> 
        <Navigation />
        <Search />
      </header>
    </>
  );
};

export default Header;
