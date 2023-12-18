export interface Filter {
  name: string;
  value: string;
  color_value?: string;
}

export interface FilterProps {
  priceFilters: Filter[];
  colorFilters: Filter[];
  sizeFilters: Filter[];
  vintageFilters: Filter[];
  accessoryFilters: Filter[];
  brandFilters: Filter[];
}

export interface OptionFilterProps {
  title: string;
  filters: { name: string; value: string; color_value?: string }[];
  selected: string[];
  handleFilter: (value: string) => void;
}

export type FilterPriceProps = {
  title: string;
  isSale: boolean;
  handleSaleFilter: (selectedSale: boolean) => void;
  filters: { name: string; value: string }[];
  selectedPrice: string | undefined;
  handleFilter: (selectedPrice: string) => void;
};

export interface ButtonFiltersProps {
  onClick: () => void;
  onCancel: () => void;
  onClear: () => void;
}
