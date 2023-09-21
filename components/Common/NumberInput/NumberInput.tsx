import { NumberInputType } from "@/types";
import styles from "./NumberInput.module.scss";

const NumberInput = ({
  type,
  placeholder,
  value,
  onChange,
}: NumberInputType) => {
  return (
    <div
      className={[
        styles.numberInputContainer,
        type === "price" ? styles.price : "",
      ].join(" ")}
    >
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default NumberInput;
