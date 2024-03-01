import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Modal from "./Modal";
import SingUpForm from "../features/authentication/SingUpForm";

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  
  100% {
    transform: translateX(-100%);
  }
`;

const reverseMarquee = keyframes`
  0% {
    transform: translateX(-100%);
  }
  
  100% {
    transform: translateX(100%);
  }
`;

const Section = styled.section`
  background-color: var(--color-brand-black);
  display: flex;
  color: var(--color-brand-white);
  flex-direction: column;
  align-items: center;
  padding: 35px 0 0;
  overflow: hidden;
  `

const StyledUl = styled.ul`
  padding-inline-start: 0; 
  list-style-type: none; 
  white-space: nowrap; 
  animation: ${marquee} 25s linear infinite alternate; 
  display: flex;
  gap: 5rem;
  
  ${(props) =>
    props.$reverse &&
    css`
    animation: ${reverseMarquee} 25s linear infinite alternate;
  `
  };

   ${(props) =>
    props.$isHover &&
    css`
      animation-play-state: paused;
    `};
`;

const StyledLi = styled.li`
  margin-right: 20px; 
  display: inline-block;
  transition: all .8s ease; 
  :hover {
    color: var(--color-brand-white);
    text-shadow: none;
  };
`;

const StyledA = styled.a`
  display: block;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-brand-black); 
  text-shadow: -1px -1px 0 #262626, 1px -1px 0 #262626, -1px 1px 0 #262626, 1px 1px 0 #262626;

  background-color: transparent;
  transition: all .8s ease;
  font-size: 55px;
  cursor: pointer;
`;

function SignUp() {
  const [hoveredRow, setHoveredRow] = useState(null)

  const handleMouseEnter = (rowNumber) => {
    setHoveredRow(rowNumber);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null)
  }

  return (
    <Section>
      {[1, 2, 3].map((rowNumber) => (
        <StyledUl
          key={rowNumber}
          $isHover={hoveredRow === rowNumber}
          onMouseEnter={() => handleMouseEnter(rowNumber)}
          onMouseLeave={handleMouseLeave}
          $reverse={rowNumber === 2 ? 'reverse' : ''}
        >
          {Array.from({ length: 7 }).map(((el = 'sign up', i) => (
            <StyledLi key={i}>
              
                <Modal>
                  <Modal.Open opens='signup'>
                  <StyledA>{el}</StyledA>
                  </Modal.Open>
                  <Modal.Window name='signup'>
                    <SingUpForm type='PUBLISHER' />
                  </Modal.Window>
                </Modal>

            </StyledLi>
          )))}
        </StyledUl>
      ))}
    </Section >
  );
}

export default SignUp
