import Link from "next/link";
import React from "react";
import SparksSvg from "/public/images/icons/sparks.svg";
import CardArrowSvg from "/public/images/icons/card-arrow.svg";

interface CardWithCircleBadgeProps {
  backgroundUrl: string;
  header: string;
  text: string;
  href?: string;
}

const CardWithCircleBadge = ({
  backgroundUrl,
  header,
  text,
  href
}: CardWithCircleBadgeProps) => {
  const backgroundImage = {
    backgroundImage: `url(${backgroundUrl})`,
  };

  return (
      <Link href={`/${href}`}>
    <div className="background" style={backgroundImage}>
      <div className="card-circle">
        <SparksSvg className="svg-sparks"/>
        <h3>{header}</h3>
        <span>{text}</span>
        <CardArrowSvg/>
      </div>
    </div>
    </Link>
  );
};

export default CardWithCircleBadge;
