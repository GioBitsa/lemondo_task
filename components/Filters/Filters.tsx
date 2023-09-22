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

const Filters = ({ open, setOpen }: any) => {
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
    console.log(filtersValue);
    setOpen(false);
  };

  const handleSelectDomains = (id: number) => {
    const newArray = filtersValue?.domains;

    if (newArray && newArray.includes(id)) {
      newArray.filter((item) => item !== id);
    } else {
      newArray?.push(id);
    }

    setFiltersValue({
      ...filtersValue,
      domains: newArray,
    });
  };

  const handleSelectCategories = (id: number) => {
    const newArray = filtersValue?.categories;

    if (newArray && newArray.includes(id)) {
      newArray.filter((item) => item !== id);
    } else {
      newArray?.push(id);
    }

    setFiltersValue({
      ...filtersValue,
      categories: newArray,
    });
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
            max={5000}
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
              checked={filtersValue.domains?.includes(domain.id) ? true : false}
              onClick={() => handleSelectDomains(domain.id)}
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
