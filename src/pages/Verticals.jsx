import styled from "styled-components"
import VerticalsInfo from "./home-sections/VerticalsInfo"

const StyledSection = styled.section`
  display: flex;
  padding: 14rem 0 9rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brand-black);
  color: var(--color-brand-white);
  `

function Verticals() {

  return (
    <>
      <StyledSection>
        <h1>VERTICALS</h1>
      </StyledSection>
      <VerticalsInfo />
    </>
  )
}

export default Verticals