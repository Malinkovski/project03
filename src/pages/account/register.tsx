import Head from "next/head";
import { useState } from "react";
import AccountWrapper from "../../components/Account/AccountWrapper";
import RegisterStepOne from "../../components/Account/Register/RegisterStepOne";
import RegisterStepTwo from "../../components/Account/Register/RegisterStepTwo";
import RegisterStepTree from "../../components/Account/Register/RegisterStepTree";

const RegisterPage = () => {
  const steps = ["step1", "step2", "step3"];
  const [registerStep, setRegisterStep] = useState(steps[0]);
  



  const nextStep = () => {
    const currentIndex = steps.indexOf(registerStep);
    if (currentIndex < steps.length - 1) {
      setRegisterStep(steps[currentIndex + 1]);
    }
  };
  /*   const prevStep = () => {
    const currentIndex = steps.indexOf(registerStep);
    if (currentIndex > 0) {
      setRegisterStep(steps[currentIndex - 1]);
    }
  }; */

  return (
    <>
      <Head>
        <title>{`Игралиште - Register`}</title>
        <meta name="register page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountWrapper>
        {registerStep === "step1" && <RegisterStepOne onClick={nextStep} />}
        {registerStep === "step2" && <RegisterStepTwo handleSuccessfullRegister={nextStep} />}
        {registerStep === "step3" && <RegisterStepTree />}
      </AccountWrapper>
    </>
  );
};

export default RegisterPage;
