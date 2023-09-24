"use client";

import React, { useState } from "react";
import styles from "./Filters.module.scss";
import Image from "next/image";
import {
  FilterCheckbox,
  NumberInput,
  RangeSlider,
  SearchInput,
} from "../Common";
import { filtersCategories, filtersDomains } from "@/constants";
import { FiltersValueType } from "@/types";
import { useDispatch } from "react-redux";
import { setFilters } from "@/redux/Slices/filtersSlice";

const Filters = ({ open, setOpen }: any) => {
  const dispatch = useDispatch();

  const [filtersValue, setFiltersValue] = useState<FiltersValueType>({
    search: "",
    priceFrom: "",
    priceTo: "",
    symbolsFrom: "",
    symbolsTo: "",
    categories: [],
    domains: [],
  });

  const handleFilter = () => {
    dispatch(setFilters(filtersValue));
    setOpen(false);
  };

  const handleSelectDomains = (value: string) => {
    const newArray = filtersValue?.domains;

    if (newArray && newArray.includes(value)) {
      const updatedArray = newArray.filter((item) => item !== value);

      setFiltersValue({
        ...filtersValue,
        domains: updatedArray,
      });
    } else {
      const updatedArray = newArray && [...newArray, value];
      setFiltersValue({
        ...filtersValue,
        domains: updatedArray,
      });
    }
  };

  const handleSelectCategories = (id: number) => {
    const newArray = filtersValue?.categories;

    if (newArray && newArray.includes(id)) {
      const updatedArray = newArray.filter((item) => item !== id);
      setFiltersValue({
        ...filtersValue,
        categories: updatedArray,
      });
    } else {
      const updatedArray = newArray && [...newArray, id];

      setFiltersValue({
        ...filtersValue,
        categories: updatedArray,
      });
    }
  };

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
            value={filtersValue.search}
            onChange={(text: string) => {
              setFiltersValue({ ...filtersValue, search: text });
            }}
            placeholder="სახელით ძიება"
          />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">ფასი</label>

          <div className={styles.priceInputContainer}>
            <NumberInput
              type="price"
              placeholder="- დან"
              value={filtersValue.priceFrom}
            />
            <NumberInput
              type="price"
              placeholder="- მდე"
              value={filtersValue.priceTo}
            />
          </div>

          <RangeSlider
            min={0}
            max={100000}
            step={50}
            priceCap={100}
            setNumberFrom={(number) =>
              setFiltersValue({ ...filtersValue, priceFrom: number })
            }
            setNumberTo={(number) =>
              setFiltersValue({ ...filtersValue, priceTo: number })
            }
          />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="symbolsFrom">სიმბოლოების რაოდენობა</label>

          <div className={styles.priceInputContainer}>
            <NumberInput placeholder="- დან" value={filtersValue.symbolsFrom} />
            <NumberInput placeholder="- მდე" value={filtersValue.symbolsTo} />
          </div>

          <RangeSlider
            min={0}
            max={30}
            step={1}
            priceCap={1}
            setNumberFrom={(number) =>
              setFiltersValue({ ...filtersValue, symbolsFrom: number })
            }
            setNumberTo={(number) =>
              setFiltersValue({ ...filtersValue, symbolsTo: number })
            }
          />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">კატეგორიები</label>

          {filtersCategories.map((category) => (
            <FilterCheckbox
              key={category + "/" + category.id}
              title={category.title}
              checked={
                filtersValue.categories?.includes(category.id) ? true : false
              }
              onClick={() => handleSelectCategories(category.id)}
            />
          ))}
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">დომენის ზონა</label>

          {filtersDomains.map((domain) => (
            <FilterCheckbox
              key={domain + "/" + domain.id}
              title={domain.title}
              checked={
                filtersValue.domains?.includes(domain.title) ? true : false
              }
              onClick={() => handleSelectDomains(domain.title)}
            />
          ))}
        </div>

        <button className={styles.searchBtn} onClick={() => handleFilter()}>
          ძიება
        </button>
      </div>
    </div>
  );
};

export default Filters;
