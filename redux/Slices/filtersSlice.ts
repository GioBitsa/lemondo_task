import { FiltersValueType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: FiltersValueType = {
  search: "",
  priceFrom: "",
  priceTo: "",
  symbolsFrom: "",
  symbolsTo: "",
  categories: [],
  domains: [],
};

export const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FiltersValueType>) => {
      return action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
