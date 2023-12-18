import React from "react";
import ButtonAltRegister from "../../Buttons/Account/ButtonAltRegister";
import GoogleSvg from "/public/images/Icons/google.svg";
import FacebookSvg from "/public/images/Icons/facebook.svg";
import Separator from "../Misc/Separator";
import ButtonSmallAccount from "../../Buttons/Account/ButtonSmallAccount";

interface RegisterStepOneProps {
  onClick: () => void;
}

const RegisterStepOne = ({onClick}:RegisterStepOneProps) => {
  return (
    <>
      <div className="register-container">
        <div className="">
        <ButtonAltRegister
            text="Регистрирај се со е-маил адреса"
            type="submit"
            className="button-alt-register"
            onClick={onClick}
          />
          <Separator/>
          <ButtonAltRegister
            text="Регистрирај се преку Google"
            type="submit"
            className="button-alt-register"
            svgIcon={<GoogleSvg />}
          />
          <ButtonAltRegister
            text="Регистрирај се преку Facebook"
            type="submit"
            className="button-alt-register"
            svgIcon={<FacebookSvg />}
          />
        </div>
        <ButtonSmallAccount
          link="/login"
          text="Веќе имаш профил?"
          linkText="Логирај се"
          />
      </div>
    </>
  );
};

export default RegisterStepOne;
