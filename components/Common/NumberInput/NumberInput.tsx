import { NumberInputType } from "@/types";
import styles from "./NumberInput.module.scss";

const NumberInput = ({ type, placeholder, value }: NumberInputType) => {
  return (
    <div
      className={[
        styles.numberInputContainer,
        type === "price" ? styles.price : "",
      ].join(" ")}
    >
      <input
        type="number"
        defaultValue={value}
        placeholder={placeholder}
        disabled
      />
    </div>
  );
};

export default NumberInput;
