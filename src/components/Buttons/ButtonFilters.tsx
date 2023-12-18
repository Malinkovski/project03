import React from "react";
import { ButtonFiltersProps } from "../../properties/filters";

const ButtonFilters = ({ onClick, onCancel, onClear }: ButtonFiltersProps) => {
  return (
    <div className="filter-button-container">
      <button className="filter-button button button-gold" onClick={onClick}>
        Филтрирај
      </button>
      <div className="filter-removers">
        <div className="button cancel-button" onClick={onCancel}>
          <span>откажи</span>
        </div>
        <div className="button cancel-button" onClick={onClear}>
          <span>исчисти филтри</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonFilters;
