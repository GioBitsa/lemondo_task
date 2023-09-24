import { FiltersValueType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FiltersValueType = {};

export const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {},
});

export const {} = filtersSlice.actions;

export default filtersSlice.reducer;
