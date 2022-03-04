import { FC, MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import Button from "../button/Button.component";
import Card from "../card/Card.component";
import styles from "./ErrorModal.styles.module.css";

interface ErrorModalProps {
  title: string;
  message: string;
  onConfirm: MouseEventHandler<HTMLDivElement | HTMLButtonElement> | undefined;
}

type BackdropProps = Pick<ErrorModalProps, "onConfirm">;
type ModalOverlayProps = ErrorModalProps;

const Backdrop: FC<BackdropProps> = ({ onConfirm }) => (
  <div className={styles.backdrop} onClick={onConfirm}></div>
);
const ModalOverlay: FC<ModalOverlayProps> = ({
  onConfirm: onClick,
  title,
  message,
}) => (
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
);

const ErrorModal: FC<ErrorModalProps> = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.querySelector("#backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay {...props} />,
        document.querySelector("#overlay-root")!
      )}
    </>
  );
};

export default ErrorModal;
