"use client";

import { useState, useEffect, useRef, MutableRefObject } from "react";
import styles from "./RangeSlider.module.scss";
import { RangeSliderType } from "@/types";

const RangeSlider = ({ min, max, step, priceCap }: RangeSliderType) => {
  const progressRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMin = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > maxValue) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < minValue) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    if (progressRef && progressRef.current) {
      progressRef.current.style.left = (minValue / max) * step + "%";
      progressRef.current.style.right = step - (maxValue / max) * step + "%";
    }
  }, [minValue, maxValue, max, step]);

  return (
    <div className={styles.rangeSliderContainer}>
      <div className={styles.progressContainer}>
        <div className={styles.progress} ref={progressRef}></div>
      </div>
      <input
        onChange={handleMin}
        type="range"
        min={min}
        step={step}
        max={max}
        value={minValue}
      />

      <input
        onChange={handleMax}
        type="range"
        min={min}
        step={step}
        max={max}
        value={maxValue}
      />
    </div>
  );
};

export default RangeSlider;
