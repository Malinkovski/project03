import React from "react";
import ArrowForwardSvg from "/public/images/icons/carousel/arrow-forward.svg";

interface SlideRightProps {
  onClick?: () => void;
}

const SlideRight = ({ onClick }: SlideRightProps) => {
  return (
    <ArrowForwardSvg
      className="slide-arrow slide-right svg-arrow"
      onClick={onClick}
    />
  );
};

export default SlideRight;
