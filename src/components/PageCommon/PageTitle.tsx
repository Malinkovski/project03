import React from "react";
import SparksSvg from "/public/images/icons/sparks.svg";

interface PageTitleProps {
  title: string;
  hideSparks?: boolean;
}

const PageTitle = ({ title, hideSparks }: PageTitleProps) => {
  return (
    <section>
      <div className="heading">
        <h1>{title}</h1>
        {hideSparks ? null : (
          <SparksSvg/>
        )}
      </div>
    </section>
  );
};

export default PageTitle;
