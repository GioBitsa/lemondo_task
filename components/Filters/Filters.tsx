import React from "react";
import styles from "./Filters.module.scss";
import Image from "next/image";
import {
  FilterCheckbox,
  NumberInput,
  RangeSlider,
  SearchInput,
} from "../Common";
import { filtersCategories, filtersDomains } from "@/constants";

const Filters = ({ open, setOpen }: any) => {
  return (
    <div className={[styles.mainContainer, open && styles.open].join(" ")}>
      <div className={styles.filtersHeader}>
        <p>ფილტრი</p>
        <div className={styles.closeIcon} onClick={() => setOpen(false)}>
          <Image
            src="/images/CloseIcon.svg"
            alt="close"
            width={10}
            height={10}
          />
        </div>
      </div>

      <div className={`${styles.filtersContent} wrapper`}>
        <div className={styles.singleFilterContainer}>
          <SearchInput
            value=""
            onChange={() => {}}
            placeholder="სახელით ძიება"
          />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">ფასი</label>

          <div className={styles.priceInputContainer}>
            <NumberInput
              type="price"
              placeholder="- დან"
              value=""
              onChange={() => {}}
            />
            <NumberInput
              type="price"
              placeholder="- მდე"
              value=""
              onChange={() => {}}
            />
          </div>

          <RangeSlider min={0} max={1000} step={100} priceCap={100} />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">სიმბოლოების რაოდენობა</label>

          <div className={styles.priceInputContainer}>
            <NumberInput placeholder="- დან" value="" onChange={() => {}} />
            <NumberInput placeholder="- მდე" value="" onChange={() => {}} />
          </div>

          <RangeSlider min={0} max={30} step={1} priceCap={1} />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">კატეგორიები</label>

          {filtersCategories.map((category) => (
            <FilterCheckbox
              title={category}
              checked={false}
              onClick={() => {}}
            />
          ))}
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">დომენის ზონა</label>

          {filtersDomains.map((domain) => (
            <FilterCheckbox title={domain} checked={false} onClick={() => {}} />
          ))}
        </div>

        <button>ძიება</button>
      </div>
    </div>
  );
};

export default Filters;
