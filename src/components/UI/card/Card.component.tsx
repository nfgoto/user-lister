import { FC } from "react";
import styles from "./Card.styles.module.css";

interface CardProps {
  className: string;
}

const Card: FC<CardProps> = ({ className, children }) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);

export default Card;
