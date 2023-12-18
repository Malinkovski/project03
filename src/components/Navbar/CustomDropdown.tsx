import React, { useState,  useRef } from "react";
import ArrowDownSvg from "/public/images/icons/arrow-down.svg";

interface CustomDropdownProps {
  options: { value: string; name: string }[];
  selectedOption: string;
  onOptionChange: (selectedValue: string) => void;
}

const CustomDropdown = ({
  options,
  selectedOption,
  onOptionChange,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string) => {
    onOptionChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="dropdown-filter button-filter" ref={dropdownRef}>
          <div className="dropdown-header" onClick={toggleDropdown}>
            <div className="dropdown-head-option">
              {options.find((option) => option.value === selectedOption)
                ?.name || "..."}{" "}
                <ArrowDownSvg />
            </div>

            <div className={`dropdown-options ${isOpen ? "active" : ""}`}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className="dropdown-option"
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDropdown;
