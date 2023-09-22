import React from "react";
import styles from "./SearchInput.module.scss";
import { SearchInputType } from "@/types";

const SearchInput = ({ value, onChange, placeholder }: SearchInputType) => {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={styles.searchInput}
    />
  );
};

export default SearchInput;
