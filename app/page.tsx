"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { SingleDomainItem, Filters, Navbar } from "@/components";
import Link from "next/link";
import { allDomains } from "@/constants";

export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("addDate");

  return (
    <>
      <Navbar />

      <main>
        <div className={`${styles.BannerContainer} wrapper`}>
          <h1>გაყიდე და იყიდე დომენი მარტივად</h1>
        </div>

        <div className={`${styles.mainContainer} wrapper`}>
          <h6>
            დომენები მარკეტზე: <span>703</span>
          </h6>
          <div className={styles.desktopFilters}>
            <div className="d-flex items-center">
              <h6>სორტირება:</h6>
              <div
                className={[
                  styles.singleSortBtn,
                  activeSort === "addDate" && styles.active,
                ].join(" ")}
                onClick={() => setActiveSort("addDate")}
              >
                <p>დამატების თარიღით</p>
                <Image
                  src="/images/SortIcon.svg"
                  alt="sort"
                  width={18}
                  height={9}
                />
              </div>
              <div
                className={[
                  styles.singleSortBtn,
                  activeSort === "dateEnd" && styles.active,
                ].join(" ")}
                onClick={() => setActiveSort("dateEnd")}
              >
                <p>ვადის ამოწურვით</p>
                <Image
                  src="/images/SortIcon.svg"
                  alt="sort"
                  width={18}
                  height={9}
                />
              </div>
              <div
                className={[
                  styles.singleSortBtn,
                  activeSort === "price" && styles.active,
                ].join(" ")}
                onClick={() => setActiveSort("price")}
              >
                <p>ფასით</p>
                <Image
                  src="/images/SortIcon.svg"
                  alt="sort"
                  width={18}
                  height={9}
                />
              </div>
              <div
                className={[
                  styles.singleSortBtn,
                  activeSort === "alphabet" && styles.active,
                ].join(" ")}
                onClick={() => setActiveSort("alphabet")}
              >
                <p>ანბანით</p>
                <Image
                  src="/images/SortIcon.svg"
                  alt="sort"
                  width={18}
                  height={9}
                />
              </div>
            </div>
            <Link href="/" className={styles.extraLink}>
              როგორ გავყიდოთ დომენი?
            </Link>
          </div>
          <div className={styles.mobileFilters}>
            <button onClick={() => setFiltersOpen(true)}>
              <p>სორტირება</p>
              <Image
                src="/images/FilterIcon.png"
                alt="სორტირება"
                width={15}
                height={15}
              />
            </button>
            <button>
              <p>სორტირება</p>
              <Image
                src="/images/DropdownIcon.svg"
                alt="select"
                width={10}
                height={8}
              />
            </button>
          </div>
          <Filters open={filtersOpen} setOpen={setFiltersOpen} />
          <div className={styles.domainList}>
            {allDomains.map((item) => (
              <SingleDomainItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
