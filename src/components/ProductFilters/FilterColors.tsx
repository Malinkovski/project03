import React from "react";
import { OptionFilterProps } from "../../properties/filters";

const FilterColors = ({
  title,
  filters,
  selected,
  handleFilter,
}: OptionFilterProps) => {
  return (
    <div className="filter-sub-container">
      <h4 className="filter-title">{title}</h4>
      <div className="filter-colors">
        {filters.map((filter) => (
          <div className="filter-color-option" key={filter.value}>
            <input
              className={`filter-color-option-checkbox `}
              title={`colorFilter-${filter.value}`}
              type="checkbox"
              id={`colorFilter-${filter.value}`}
              color={filter.color_value}
              name="colorFilter"
              value={filter.name}
              checked={selected.includes(filter.name)}
              onChange={(e) => handleFilter(e.target.value)}
            />
            <label
              style={{
                backgroundColor: filter.color_value,
                borderColor:
                  filter.color_value === "#FFFFFF" ? "black" : "trasparent",
              }}
              htmlFor={`colorFilter-${filter.value}`}
            ></label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterColors;
