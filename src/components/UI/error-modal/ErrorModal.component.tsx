import { FC, MouseEventHandler } from "react";
import Button from "../button/Button.component";
import Card from "../card/Card.component";
import styles from "./ErrorModal.styles.module.css";

interface ErrorModalProps {
  onClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement> | undefined;
  title: string;
  message: string;
}

const ErrorModal: FC<ErrorModalProps> = ({ onClick, title, message }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClick}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onClick}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
