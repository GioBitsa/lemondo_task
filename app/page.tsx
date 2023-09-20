"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { Filters } from "@/components";

export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <main>
      <div className={`${styles.BannerContainer} wrapper`}>
        <h1>გაყიდე და იყიდე დომენი მარტივად</h1>
      </div>

      <div className={`${styles.mainContainer} wrapper`}>
        <Filters open={filtersOpen} setOpen={setFiltersOpen} />
      </div>
    </main>
  );
}
