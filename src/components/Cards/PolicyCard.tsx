import React, { useState } from "react";
import { PolicyCardProps } from "../../properties/cards";
import BoxTickSvg from "/public/images/icons/policy/box-tick.svg";
import ReturnBoxSvg from "/public/images/icons/policy/return-box.svg";
import DeliveryTruckSvg from "/public/images/icons/policy/delivery-truck.svg";
import ChatHelpSvg from "/public/images/icons/policy/chat-help.svg";

const PolicyCard = ({ title, text, icon }: PolicyCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleBox = () => setIsActive(!isActive);

  const getPolicyIcon = (icon: string) => {
    switch (icon) {
      case "box-tick":
        return <BoxTickSvg className="svg-medium" />;
      case "return-box":
        return <ReturnBoxSvg className="svg-medium" />;
      case "delivery-truck":
        return <DeliveryTruckSvg className="svg-medium" />;
      case "chat-help":
        return <ChatHelpSvg className="svg-medium" />;
      default:
        return null;
    }
  };

  return (
    <div className="pbox" onClick={toggleBox}>
      <div className="box-heading">
        <div className="bh-left">
          {getPolicyIcon(icon)}
          <h4>{title}</h4>
        </div>
        <div className={`box-expand-button ${isActive ? "active" : ""}`}>
          <div className="h-line"></div>
          <div className="v-line"></div>
        </div>
      </div>
      <div className={`box-content ${isActive ? "expand" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PolicyCard;
