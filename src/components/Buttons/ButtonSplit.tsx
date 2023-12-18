import React, { useState } from "react";

interface ButtonProps {
  optionOne: string;
  optionTwo: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const ButtonSplit = ({
  optionOne,
  optionTwo,
  onLeftClick,
  onRightClick,
}: ButtonProps) => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="button-split-nav">
      <div className="button-split">
        <div
          className={`b-left button ${selected ? "active-left" : ""}`}
          onClick={() => {
            onLeftClick();
            setSelected(true);
          }}
        >
          <h5>{optionOne}</h5>
        </div>
        <div className="separator"></div>
        <div
          className={`b-right button ${!selected ? "active-right" : ""}`}
          onClick={() => {
            onRightClick();
            setSelected(false);
          }}
        >
          <h5>{optionTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export default ButtonSplit;
