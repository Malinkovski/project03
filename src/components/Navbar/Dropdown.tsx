import React, { useEffect, useState } from "react";
import Option from "./Option";
import { API_BASE_URL } from "../../properties/variables";
import ArrowDownSvg from "/public/images/icons/arrow-down.svg";

interface OptionType {
  id: number;
  link: string;
  name: string;
}

interface DropdownProps {
  title: string;
  categoryOfType: string;
  typeOfLocation: string;
}

const Dropdown = ({ title, categoryOfType, typeOfLocation }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [options, setOptions] = useState<OptionType[]>([]);

  const handleDropdownClick = () => setIsActive(!isActive);

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setIsActive(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${categoryOfType}`);
        const data: OptionType[] = await response.json();
        setOptions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categoryOfType]);

  return (
    <div
      className={`option `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`dropdown dropdown-expand-button`}
        onClick={handleDropdownClick}
      >
        <span>{title}</span>
        <ArrowDownSvg className={`dropdown-arrow ${isActive ? "active" : ""}`}/>

      </div>

      <div className={`dropdown-content `}>
        <ul className={`dropdown-options ${isActive ? "active" : ""}`}>
          <Option
            style="visit-all"
            link={
              categoryOfType !== "local_brands"
                ? `/${typeOfLocation}?type_id_like=${categoryOfType}`
                : `/${typeOfLocation}`
            }
            text="Види ги сите"
            closeDropdown={() => setIsActive(false)}
          />
          {options.map((option) => (
            <Option
              key={option.id}
              link={
                categoryOfType !== "local_brands"
                ? `/${typeOfLocation}?category_id_like=${option.id}`
                : `/${typeOfLocation}/${option.id}`
              }
              text={option.name}
              closeDropdown={() => setIsActive(false)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
