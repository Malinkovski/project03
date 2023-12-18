import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useNavigationContext } from "../context/NavigationContext";
import { HandleChangeProps } from "../properties/misc";

const useProductFilters = () => {
  const router = useRouter();

  const { isFilterNavActive, setIsFilterNavActive } = useNavigationContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string>();
  const [isSale, setIsSale] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSortOption, setSelectedSortOption] = useState<string>("date");

  const closeFilteringBar = () => setIsFilterNavActive(false);
  const openFilteringBar = () => setIsFilterNavActive(true);

  const handlePageChange = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    setCurrentPage(page);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, _page: page.toString() },
    });
  };
  const handleOptionChange = ({
    selectedValue,
    selectedArray,
    setSelectedArray,
  }: HandleChangeProps) => {
    let updatedArray = [...selectedArray];

    if (updatedArray.includes(selectedValue)) {
      updatedArray = updatedArray.filter((item) => item !== selectedValue);
    } else {
      updatedArray.push(selectedValue);
    }

    setSelectedArray(updatedArray);
  };
  const handleCategoryChange = (selectedCategory: string) => {
    handleOptionChange({
      selectedValue: selectedCategory,
      selectedArray: selectedCategories,
      setSelectedArray: setSelectedCategories,
    });
  };
  const handleBrandChange = (selectedBrand: string) => {
    handleOptionChange({
      selectedValue: selectedBrand,
      selectedArray: selectedBrands,
      setSelectedArray: setSelectedBrands,
    });
  };
  const handleAccessoryChange = (selectedAccessory: string) => {
    handleOptionChange({
      selectedValue: selectedAccessory,
      selectedArray: selectedCategories,
      setSelectedArray: setSelectedCategories,
    });
  };
  const handleSizeChange = (selectedSize: string) => {
    handleOptionChange({
      selectedValue: selectedSize,
      selectedArray: selectedSizes,
      setSelectedArray: setSelectedSizes,
    });
  };
  const handleColorChange = (selectedColor: string) => {
    handleOptionChange({
      selectedValue: selectedColor,
      selectedArray: selectedColors,
      setSelectedArray: setSelectedColors,
    });
  };
  const handlePriceChange = (selectedPrice: string) => {
    setSelectedPrices(selectedPrice);
  };
  const handleSaleChange = (selectedSale: boolean) => {
    setIsSale(!selectedSale);
  };
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSortOptionChange = (selectedValue: string) => {
    setSelectedSortOption(selectedValue);

    const sortOrder = selectedValue === "asc" ? "asc" : "desc";
    const query = {
      ...router.query,
      _sort: "date",
      _order: sortOrder,
    };

    router.push({
      pathname: "/products",
      query,
    });
  };

  const handleCancelFilteringButton = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedBrands([]);
    setSelectedAccessories([]);
    setSelectedPrices("");
    setIsSale(false);
    setSearchQuery("");
    setSelectedSortOption("date");

    closeFilteringBar();
  };
  const handleClearFilteringButton = () => {
    handleCancelFilteringButton();
    closeFilteringBar();
    router.replace({
      pathname: router.pathname,
      query: {},
    });
  };
  return {
    currentPage,
    selectedCategories,
    selectedColors,
    selectedSizes,
    selectedBrands,
    selectedAccessories,
    selectedPrices,
    isSale,
    searchQuery,
    selectedSortOption,
    isFilterNavActive,
    setCurrentPage,
    closeFilteringBar,
    openFilteringBar,
    handlePageChange,
    handleCategoryChange,
    handleBrandChange,
    handleAccessoryChange,
    handleSizeChange,
    handleColorChange,
    handlePriceChange,
    handleSaleChange,
    handleSearchInputChange,
    handleSortOptionChange,
    handleCancelFilteringButton,
    handleClearFilteringButton,
  };
};

export default useProductFilters;
