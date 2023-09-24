import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { headerLinks } from "@/constants";
import { useSelector } from "react-redux";

const Navbar = () => {
  const numberOfCartItems = useSelector(
    (state: any) => state.cartReducer.cart.length
  );

  return (
    <header className={styles.header}>
      <div className={`${styles.topHeader} wrapper`}>
        <div className="d-flex items-center">
          <div className={styles.sidebar}>
            <Image
              src="/images/sidebarIcon.svg"
              alt="sidebar"
              width={20}
              height={16}
            />
          </div>

          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={150}
              height={25}
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={`d-flex items-center ${styles.mobileImages}`}>
          <div className={styles.iconsContainer}>
            <Image
              src="/images/NotificationFilledIcon.svg"
              alt="notification"
              width={20}
              height={20}
            />
          </div>
          <div className={[styles.iconsContainer, styles.cartIcon].join(" ")}>
            <Image
              src="/images/CartFilledIcon.svg"
              alt="cart"
              width={20}
              height={20}
            />

            {numberOfCartItems > 0 && <span>{numberOfCartItems}</span>}
          </div>
          <div className={styles.iconsContainer}>
            <Image
              src="/images/UserFilledIcon.svg"
              alt="user"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className={`d-flex items-center ${styles.desktopImages}`}>
          <div className={styles.iconsContainer}>
            <Image
              src="/images/NotificationIcon.svg"
              alt="notification"
              width={20}
              height={20}
            />
          </div>
          <div className={[styles.iconsContainer, styles.cartIcon].join(" ")}>
            <Image
              src="/images/CartGrayIcon.svg"
              alt="cart"
              width={20}
              height={20}
            />

            {numberOfCartItems > 0 && <span>{numberOfCartItems}</span>}
          </div>
          <div
            className={[styles.iconsContainer, styles.userIconContainer].join(
              " "
            )}
          >
            <div className="d-flex items-center">
              <Image
                src="/images/UserIcon.svg"
                alt="user"
                width={20}
                height={20}
              />
              <p>kancha Co.</p>

              <Image
                src="/images/DownIcon.svg"
                alt="down"
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className={styles.iconsContainer}>
            <Image src="/images/Flag.svg" alt="flag" width={35} height={35} />
          </div>
        </div>
      </div>

      <div className={styles.bottomHeader}>
        <div className={`${styles.bottomHeaderRow} wrapper`}>
          <div>
            {headerLinks[0].map((link, index) => (
              <Link
                key={link + "/" + index}
                href={link.path}
                className={styles.headerLink}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div>
            {headerLinks[1].map((link) => (
              <Link href={link.path} className={styles.headerLink}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
