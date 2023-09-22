export interface SearchInputType {
  value?: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export interface NumberInputType {
  type?: "price" | "default";
  value?: string;
  placeholder: string;
}

export interface RangeSliderType {
  min: number;
  max: number;
  step: number;
  priceCap: number;
  setNumberFrom: (value: string) => void;
  setNumberTo: (value: string) => void;
}

export interface FiltersValueType {
  search?: string;
  priceFrom?: string;
  priceTo?: string;
  symbolsFrom?: string;
  symbolsTo?: string;
  categories?: number[];
  domains?: number[];
}

export interface FiltersSingleCategory {
  checked: boolean;
  title: string;
  onClick?: () => void;
}
