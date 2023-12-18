import React from "react";
import CustomDropdown from "../Navbar/CustomDropdown";
import FilterSearchSvg from "/public/images/icons/filter-search-button.svg";

interface FilterBarProps {
  openFilteringBar: () => void;
  selectedSortOption: string;
  handleSortOptionChange: (option: string) => void;
}

const filterBar = ({
  openFilteringBar,
  selectedSortOption,
  handleSortOptionChange,
}: FilterBarProps) => {
  const sortOptions = [
    { value: "desc", name: "Најново" },
    { value: "asc", name: "Најстаро" },
    //{ value: "price-asc", name: "Цена - растечки" },
    //{ value: "price-desc", name: "Цена - опаѓачки" }
  ];

  return (
    <div className="filter-bar">
      <div>
        <div
          className="filter-nav-button button-filter filters"
          onClick={openFilteringBar}
        >
          <FilterSearchSvg className="filter-button-icon"/>
        </div>
      </div>
      <div className="filter-title ">
        <p>Подреди според</p>
      </div>
      <div className="filter-sub-container">
        <div className="dropdown-container">
          <CustomDropdown
            options={sortOptions}
            selectedOption={selectedSortOption}
            onOptionChange={handleSortOptionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default filterBar;
