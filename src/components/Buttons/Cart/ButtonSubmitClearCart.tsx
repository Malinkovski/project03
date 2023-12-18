import React from "react";
import TrashCanSvg from "/public/images/icons/trash-can.svg";

interface ButtonClearCartProps {
  clearCart: () => void;
  setShowModalStatus: (boolean: boolean) => void;
}

const ButtonSubmitClearCart = ({ clearCart, setShowModalStatus }: ButtonClearCartProps) => {


  
  const handleSubmitCart = () =>  {
    setShowModalStatus(true);
  }

  return (
    <div className="confirm-order">
      <button onClick={handleSubmitCart} className="button button-gold">Продолжи</button>
      <button title="trash-can" onClick={clearCart} className="trash-can">
        <TrashCanSvg className="svg-medium"/>
      </button>
    </div>
  );
};

export default ButtonSubmitClearCart;
