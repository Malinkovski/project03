import React from "react";
import ArrowBackSvg from "/public/images/icons/carousel/arrow-back.svg";

interface SlideRightProps {
  onClick?: () => void;
}

const SlideLeft = ({ onClick }: SlideRightProps) => {
  return (
    <ArrowBackSvg
      className="slide-arrow slide-left svg-arrow"
      onClick={onClick}
    />
  );
};

export default SlideLeft;
