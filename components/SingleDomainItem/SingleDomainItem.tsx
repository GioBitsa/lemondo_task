"use client";

import React from "react";
import styles from "./SingleDomainItem.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/Slices/cartSlice";

const SingleDomainItem = ({ data }: any) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cartReducer.cart);

  const itemExistsInCart = cartItems.includes(data);

  const handleAddCart = () => {
    dispatch(addToCart(data));
  };

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

        {itemExistsInCart ? (
          <div className={styles.alreadyInCart}>
            <Image
              src="/images/TickIcon.svg"
              alt="tick icon"
              width={18}
              height={18}
            />
            <p>კალათაშია</p>
          </div>
        ) : (
          <div className={styles.cartBtn} onClick={() => handleAddCart()}>
            <p>დამატება</p>
            <Image
              src="/images/CartWhiteIcon.svg"
              alt="cart button"
              width={20}
              height={16}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDomainItem;
