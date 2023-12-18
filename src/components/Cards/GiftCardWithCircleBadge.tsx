import Link from "next/link";
import React from "react";
import StarGiftCardSvg from "/public/images/icons/star-gift-card.svg";
import SparksSvg from "/public/images/icons/sparks.svg";
import CardArrowSvg from "/public/images/icons/card-arrow.svg";

interface GiftCardWithCircleBadgeProps {
  backgroundUrl: string;
  header: string;
  text: string;
}

const GiftCardWithCircleBadge = ({
  backgroundUrl,
  header,
  text,
}: GiftCardWithCircleBadgeProps) => {
  const backgroundImage = {
    backgroundImage: `url(${backgroundUrl})`,
  };

  return (
    <div className="img-container gift-img">
      <div className="background-gift" style={backgroundImage}>
          <StarGiftCardSvg className="star-gift-card svg-bigger"/>
      </div>
      <Link href="/gift-cards">
        <div className="card-circle">
        <SparksSvg className="svg-sparks"/>
          <h3>{header}</h3>
          <span>{text}</span>
          <CardArrowSvg/>
        </div>
      </Link>
    </div>
  );
};

export default GiftCardWithCircleBadge;
