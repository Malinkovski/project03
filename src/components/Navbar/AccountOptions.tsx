import Link from "next/link";
import React from "react";
import { useNavigationContext } from "../../context/NavigationContext";
import CartSvg from "/public/images/icons/cart.svg";
import HeartSvg from "/public/images/icons/heart.svg";
import ButtonLoginOrProfile from "./ButtonLoginOrProfile";

const AccountOptions = () => {
  const { setCloseNavbar,isLoggedIn } = useNavigationContext();

  const handleClick = () => {
    setCloseNavbar(true);
  };

  return (
    <div className="nav-options nav-btns">
      <ul>
        <li>
          <div className="option" onClick={handleClick}>
            <Link href={"/cart"}>
              <button title="heartbtn">
                <CartSvg />
              </button>
            </Link>
            <Link className="account-link-text" href={"/cart"}>
              Кошничка
            </Link>
          </div>
        </li>
        <li>
          <div className="option" onClick={handleClick}>
            <Link href={"/favorites"}>
              <button title="heartbtn">
                <HeartSvg />
              </button>
            </Link>
            <Link className="account-link-text" href={"/favorites"}>
              Омилени
            </Link>
          </div>
        </li>
        <li>
          <ButtonLoginOrProfile isLoggedIn={isLoggedIn} handleClick={handleClick} />
        </li>
      </ul>
    </div>
  );
};

export default AccountOptions;
