import { createContext, useContext, useState } from "react"
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledList = styled.ul`
  position: fixed;
  margin-top: 1rem;
  background-color: var(--color-grey-700);
  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    opacity: 0.8;
  }

  & svg {
    width: 4rem;
    height: 4rem;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-500);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(null);

  const close = () => setIsOpen(false);
  const open = setIsOpen;

  return (
    <MenusContext.Provider
      value={{ isOpen, open, position, setPosition, close }}>
      {children}
    </MenusContext.Provider>
  )
}

function Toggle() {
  const { open, setPosition, isOpen, close } = useContext(MenusContext);

  function handleClick(e) {

    const rect = e.target.closest('button').getBoundingClientRect()
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    })

    isOpen ? close() : open(prev => !prev);
  }

  return (
    <StyledToggle onClick={handleClick} >
      <GiHamburgerMenu />
    </StyledToggle>
  )
}


function List({ children }) {
  const { position, close, isOpen } = useContext(MenusContext)

  const ref = useOutsideClick(close)

  if (isOpen === false) return null;

  return createPortal(
    <StyledList
      ref={ref}
      $position={position}>
      {children}
    </StyledList>,
    document.body
  )
}

function Button({ children }) {

  return (
    <li>
      <StyledButton>
        {children}
      </StyledButton>
    </li>
  )
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
