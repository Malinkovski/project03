import React from "react";
import Link from "next/link";
import PfUserSvg from "/public/images/icons/pf-user.svg";

interface ButtonLoginOrProfileProps {
  handleClick: () => void;
  isLoggedIn: boolean;
}

const ButtonLoginOrProfile = ({
  handleClick,
  isLoggedIn,
}: ButtonLoginOrProfileProps) => {
  return (
    <>
      <div className="option" onClick={handleClick}>
        <Link href={"/account/login"}>
          <button title="profile-icon" className="login-register">
            <PfUserSvg />
          </button>
        </Link>

        {!isLoggedIn ? (
          <Link className="account-link-text" href={"/account/login"}>
            <span>Регистрирај&nbsp;се</span> / <span>Логирај&nbsp;се</span>
          </Link>
        ) : (
          <Link className="account-link-text" href={"/account/profile"}>
            <span>Мој&nbsp;профил</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default ButtonLoginOrProfile;
