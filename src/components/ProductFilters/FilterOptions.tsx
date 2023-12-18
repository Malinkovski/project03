import React from "react";
import { OptionFilterProps } from "../../properties/filters";

const FilterOptions = ({
  title,
  filters,
  selected,
  handleFilter,
}: OptionFilterProps) => {
  return (
    <div className="filter-sub-container">
      <h4 className="filter-title">{title}</h4>
      {filters.map((filter) => (
        <div key={filter.value}>
          <input
            className="filter-option-input"
            type="checkbox"
            id={`filter-${filter.name}`}
            name={`filter-option-${filter.value}`}
            value={filter.value}
            checked={selected.includes(filter.value)}
            onChange={(e) => handleFilter(e.target.value)}
          />
          <label
            className="filter-option-name"
            htmlFor={`filter-${filter.name}`}
          >
            {filter.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
