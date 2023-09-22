import React from "react";
import styles from "./FilterCheckbox.module.scss";
import Image from "next/image";
import { FiltersSingleCategory } from "@/types";

const FilterCheckbox = ({ title, checked, onClick }: FiltersSingleCategory) => {
  return (
    <div className={styles.mainContainer} onClick={onClick}>
      <div className={[styles.checkbox, checked && styles.checked].join(" ")}>
        {checked && (
          <Image
            src="/images/TickIcon.svg"
            alt="checked"
            width={20}
            height={20}
          />
        )}
      </div>
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default FilterCheckbox;
