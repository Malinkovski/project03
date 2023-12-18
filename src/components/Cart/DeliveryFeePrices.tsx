import React from "react";

interface DeliveryFeePricesProps {
  deliveryFee: number;
}

const DeliveryFeePrices = ({ deliveryFee }: DeliveryFeePricesProps) => {
  return (
    <li className="delivery">
      <span>+ достава до дома</span>
      <span className="fixed-delivery price">{deliveryFee} ден.</span>
    </li>
  );
};

export default DeliveryFeePrices;
