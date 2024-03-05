import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { currentYear } from "../common/utils";
import styled from "styled-components"
import SignUp from "../pages/SignUp";

const Section = styled.section`
  max-width: 1240px;
  padding: 6rem;
  margin: 0 auto;
  background-color: var(--color-brand-black);
  color: var(--color-brand-white);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 18px;
  align-items: center;
  `

const UpperContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 550px){
    flex-wrap: wrap;
    gap: 2rem;
  }
`

const Ul = styled.ul`
  display: flex;
  gap: 5rem;
`

const Icons = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 2.5rem;
`

const Stripe = styled.div`
  width:  100%;
  border: 1px solid var(--color-brand-white);
  opacity: 0.6;
`
const LastPhrase = styled.p`
  font-size: 16px;
  opacity: 0.7;
  font-weight: 200;
  letter-spacing: 0.75px;
`

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
      <SignUp />

      <Section>
        <UpperContent>
          <Ul>
            <li>
              <Link to='verticals'>Verticals</Link>
            </li>
            <li>
              <Link to='blog'>Blog</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
            {/* <li>
              <Link>Privacy Policy</Link>
            </li> */}
          </Ul>
          <Icons>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
          </Icons>
        </UpperContent>

        <Stripe />

        <span>
          <LastPhrase>{currentYear} © All rights reserved</LastPhrase>
        </span>
      </Section>
    </>
  )
}

export default Footer
