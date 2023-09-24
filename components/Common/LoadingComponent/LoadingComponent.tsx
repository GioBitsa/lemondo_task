import React from "react";
import styles from "./LoadingComponent.module.scss";

const LoadingComponent = () => {
  return (
    <div className={styles.animatedLoading}>
      <div className={styles.spinner}></div>
      <p>იტვირთება...</p>
    </div>
  );
};

export default LoadingComponent;
