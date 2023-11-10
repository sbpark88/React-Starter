import React from "react";
import styled from "@emotion/styled/macro";
import Portal from "./Portal";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 456px;
  position: relative;
  width: 100%;
`;

interface Props {
  children: any;
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

const Modal: React.FC<Props> = ({
  children,
  isOpen,
  onClose,
  selector = "#modal-root",
}) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <Portal selector={selector}>
        <Overlay>
          <Dim onClick={onClose} />
          <Container>{children}</Container>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
