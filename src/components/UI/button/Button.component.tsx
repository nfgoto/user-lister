import { FC, MouseEventHandler } from "react";
import styles from "./Button.styles.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<ButtonProps> = ({ children, type, onClick }) => (
  <button className={styles.button} type={type || "button"} onClick={onClick}>
    {children}
  </button>
);

export default Button;
