import { useState } from "react";
import { cloneElement } from "react";
import { useContext } from "react";
import { createContext } from "react";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  opacity: ${props => props.open ? '1' : '0'};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  animation: ${props => props.open ? 'modalOpen 0.5s ease-in-out forwards' : 'modalClose 0.5s ease-in-out forwards'};
  
  @keyframes modalOpen {
    from {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
      visibility: hidden;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes modalClose {
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
      visibility: visible;
    }
    to {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  opacity: ${props => props.open ? '1' : '0'};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  animation: ${props => props.open ? 'fadeIn 1s ease-in-out forwards' : 'fadeOut 1s ease-in-out forwards'};
  
    @keyframes fadeIn {
      from {
        opacity: 0;
        visibility: hidden;
      }
      to {
        opacity: 1;
        visibility: visible;
      }
    }

  @keyframes fadeOut {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('')

  const close = () => setOpenName('')
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, opens: opensWindowName }) {

  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name }) {
  const { close, openName } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay open={name === openName}>
      <StyledModal open={name === openName} ref={ref}>
        <div>
          {cloneElement(children, { onCloseModal: () => close() })}
        </div>
      </StyledModal>
    </Overlay>
    ,
    document.body
  )
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal
