export interface SearchInputType {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export interface NumberInputType {
  type?: "price" | "default";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export interface RangeSliderType {
  min: number;
  max: number;
  step: number;
  priceCap: number;
}
