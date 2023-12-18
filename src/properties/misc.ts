export interface RibbonAdProps {
  adOne: string;
  adTwo: string;
}

export interface AdvertisementProps {
  id: string;
  title: string;
  image: string;
  text: string;
  ad_tag: string;
}

export interface BrandProps {
  id: string;
  name: string;
  text: string;
  image: string;
}

export interface HandleChangeProps {
  selectedValue: string;
  selectedArray: string[];
  setSelectedArray: React.Dispatch<React.SetStateAction<string[]>>;
}
