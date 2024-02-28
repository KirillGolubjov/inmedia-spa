import styled from "styled-components"
import LatestUpdates from "./home-sections/LatestUpdates"

const StyledSection = styled.section`
  display: flex;
  padding: 14rem 0 9rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brand-black);
  `

function Blog() {

  return (
    <>
      <StyledSection>
        <h1>BLOG</h1>
      </StyledSection>
      <LatestUpdates />
    </>
  )
}

export default Blog
