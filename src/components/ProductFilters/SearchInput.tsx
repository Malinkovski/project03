import React from "react";
import SearchSvg from "/public/images/icons/search-icon-basic.svg";

interface SearchInputProps {
  searchQuery: string;
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ searchQuery, handleFilter }: SearchInputProps) => {
  return (
    <div className="filter-sub-container">
      <div className="search-input-container">
        <input
        id="searchbar"
          className="search-input"
          type="text"
          placeholder="Пребарувај..."
          value={searchQuery}
          onChange={handleFilter}
        />
        <SearchSvg className="search-icon"/>
      </div>
    </div>
  );
};

export default SearchInput;
