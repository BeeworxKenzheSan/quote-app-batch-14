import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css'


type BackDropTypes = {
  onClose: () => void
}
type ModalOverlayTypes = {
  children: React.ReactNode
}

type ModalTypes = BackDropTypes & ModalOverlayTypes

const Backdrop = (props: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal") as HTMLElement;

const Modal = (props: ModalTypes) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
