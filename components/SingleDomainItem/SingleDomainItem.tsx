"use client";

import React from "react";
import styles from "./SingleDomainItem.module.scss";
import Image from "next/image";

const SingleDomainItem = ({ data }: any) => {
  const handleAddCart = () => {};

  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.dropdownImageContainer}>
          <Image
            src="/images/DownSecondaryFilledIcon.svg"
            alt="dropdown"
            width={36}
            height={36}
          />
          <Image
            src="/images/DownPrimaryFilledIcon.svg"
            alt="dropdown"
            width={36}
            height={36}
          />
        </div>
        <p>{data.title}</p>
      </div>

      <div>
        <div className="d-flex flex-column items-right">
          <h6>{data.price} ₾</h6>
          <span>{data.price$} $</span>
        </div>

        <div className={styles.cartBtn} onClick={() => handleAddCart()}>
          <p>დამატება</p>
          <Image
            src="/images/CartWhiteIcon.svg"
            alt="cart button"
            width={20}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleDomainItem;
