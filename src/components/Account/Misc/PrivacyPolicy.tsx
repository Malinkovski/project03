import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
    return (
      <div className="privacy-policy">
        <span>Со вашата регистрација, се согласувате со </span>
        <Link href={`/privacy`}>
          <span>Правилата и Условите</span>
        </Link>
        <span> за кориснички сајтови.</span>
      </div>
    );
  };

  export default PrivacyPolicy;
