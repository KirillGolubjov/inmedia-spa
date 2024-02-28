import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import SingUpModal from "./SingUpModal";
import Menus from "./Menus";

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 0;
  background-color: var(--color-brand-black);
  position: fixed;
  top: ${(props) => (props.$isHeaderVisible ? "0" : "-100%")};
  transition: top 0.5s ease-in-out;
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

const StyledUl = styled.ul`
  display: flex;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
   @media screen and (max-width: 820px){
    display: none;
  }
`

const BurgerMenu = styled.div`
  display: none;
  @media screen and (max-width: 820px){
    display: flex;
  }
`

const StyledLi = styled.li`
  padding: 0 25px;
  @media screen and (max-width: 912px){
    padding: 0 20px;
  }
`
const StyledH1 = styled.h1`
  font-size: 36px;
`
const Stripe = styled.div`
  color: var(--color-brand-blue);
  font-size: 40px;
  width: 170px;
  border-bottom: 4px solid var(--color-brand-blue);
`




function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const halfWindowHeight = windowHeight / 1.3;
      if (scrollPosition > halfWindowHeight) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledHeader $isHeaderVisible={isHeaderVisible}>
      <Container>
        <Link to='/'>
          <StyledH1>
            INMEDIA
            <Stripe />
          </StyledH1>
        </Link>

        <StyledUl>
          <StyledLi>
            <Link to='verticals'>Verticals</Link>
          </StyledLi>
          <StyledLi>
            <Link to='blog'>Blog</Link>
          </StyledLi>
          <StyledLi>
            <Link to='contact'>Contact</Link>
          </StyledLi>
          <StyledLi>
            <Link to='login'>Login</Link>
          </StyledLi>
          <StyledLi>
            <SingUpModal size='small' variation='headerButton' type='PUBLISHER'>
              Sign Up
            </SingUpModal>
          </StyledLi>
        </StyledUl>


        <BurgerMenu>
          <Menus.Menu>
            <Menus.Toggle />
            <Menus.List >
              <Menus.Button>
                <Link to='verticals'>Verticals</Link>
              </Menus.Button>
              <Menus.Button>
                <Link to='blog'>Blog</Link>
              </Menus.Button>
              <Menus.Button>
                <Link to='contact'>Contact</Link>
              </Menus.Button>
              <Menus.Button>
                <Link to='login'>Login</Link>
              </Menus.Button>
              <SingUpModal size='small' variation='headerButton' type='PUBLISHER'>
                Sign Up
              </SingUpModal>
            </Menus.List>
          </Menus.Menu>
        </BurgerMenu>


      </Container>
    </StyledHeader>
  )
}

export default Header
