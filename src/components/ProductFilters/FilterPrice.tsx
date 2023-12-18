import React from "react";
import { FilterPriceProps } from "../../properties/filters";

const FilterPrice = ({
  title,
  isSale,
  handleSaleFilter,
  filters,
  selectedPrice,
  handleFilter,
}: FilterPriceProps) => {
  return (
    <div className="filter-sub-container">
      <h4 className="filter-title sale-filter">{title}</h4>
      <div className="">
        <input
          className="filter-option-input"
          type="checkbox"
          id="saleFilter"
          name="saleFilter"
          checked={isSale}
          onChange={() => {
            handleSaleFilter(isSale);
          }}
        />
        <label className="filter-option-name sale-option" htmlFor="saleFilter">
          <span>На Попуст</span>*
        </label>
      </div>
      <div className="filter-sub-container">
        {filters.map((filter) => (
          <div key={filter.value}>
            <input
              className="filter-option-input"
              type="radio"
              id={`priceFilter-${filter.value}`}
              name="priceFilter"
              value={filter.value}
              checked={selectedPrice === filter.value}
              onChange={() => handleFilter(filter.value)}
            />
            <label
              className="filter-option-name"
              htmlFor={`priceFilter-${filter.value}`}
            >
              {filter.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPrice;
