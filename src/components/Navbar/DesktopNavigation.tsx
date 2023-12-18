import React from "react";
import Dropdown from "./Dropdown";
import Option from "./Option";
import AccountOptions from "./AccountOptions";

interface DesktopNavigationProps {
    style?: string;
    closeNavbar: boolean;
}

const DesktopNavigation = ({
    closeNavbar,
}:DesktopNavigationProps) => {
  return (
    <>
      <div className="desktop-navbar-container">
        <div className={`navbar ${closeNavbar ? "closed" : ""}`}>
          <ul className="nav-options nav-links">
            <li>
              <h5>
                <Option text="Ново" link="/products?_sort=date&_order=desc" />
              </h5>
            </li>
            <li>
              {/* /products/{option.id}? */}
              <Dropdown
                title="Vintage облека"
                typeOfLocation="products"
                categoryOfType="vintage"
              />
            </li>
            <li>
              {/* /local_brands/{option.id} */}
              <Dropdown
                title="Брендови"
                typeOfLocation="local_brands"
                categoryOfType="local_brands"
              />
            </li>
            <li>
              {/* /products/accessories/{option.id} */}
              <Dropdown
                title="Аксесоари"
                typeOfLocation="products"
                categoryOfType="accessories"
              />
            </li>
            <li>
              <Option text="Lifestyle" link="/" />
            </li>
            <li>
              <Option text="Подари картичка*" link="/gift-cards" />
            </li>
            <li>
              <Option text="Попуст" link="/products?&sale=true" style="sale" />
            </li>
          </ul>

            <div className="desktop-account-options">
          <AccountOptions /> 
            </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
