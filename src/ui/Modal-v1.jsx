import { HiXMark } from "react-icons/hi2";
import { StyledModal, Overlay, Button } from "./Modal-styles";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

export default Modal;
