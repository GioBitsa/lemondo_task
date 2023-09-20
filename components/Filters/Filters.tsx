import React from "react";
import styles from "./Filters.module.scss";
import Image from "next/image";

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
          <input
            type="search"
            defaultValue=""
            placeholder="სახელით ძიება"
            className={styles.searchInput}
          />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">ფასი</label>

          <div className={styles.priceInputContainer}>
            <input
              type="number"
              name="priceFrom"
              id="priceFrom"
              placeholder="- დან"
            />
            <input
              type="number"
              name="priceFrom"
              id="priceFrom"
              placeholder="- მდე"
            />
          </div>

          <input
            type="range"
            name="priceRange"
            id="priceRange"
            min={0}
            max={100}
          />
        </div>

        <div className={styles.singleFilterContainer}>
          <label htmlFor="priceFrom">სიმბოლოების რაოდენობა</label>

          <div className={styles.priceInputContainer}>
            <input
              type="number"
              name="priceFrom"
              id="priceFrom"
              placeholder="- დან"
            />
            <input
              type="number"
              name="priceFrom"
              id="priceFrom"
              placeholder="- მდე"
            />
          </div>

          <input
            type="range"
            name="priceRange"
            id="priceRange"
            min={0}
            max={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
