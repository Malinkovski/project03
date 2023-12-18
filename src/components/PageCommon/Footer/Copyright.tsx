import React from "react";

interface CopyRightProps {
  className?: string;
}

const CopyRight = ({ className }: CopyRightProps) => {
  return (
    <div className={className && `${className} copyright`}>
      Сите права задржани © 2023 igralishtesk.mk
    </div>
  );
};

export default CopyRight;
