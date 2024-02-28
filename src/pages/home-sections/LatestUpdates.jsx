import styled from "styled-components"
import { BLOG_CONTENT } from "../../common/consts"

const Title = styled.h1`
  margin-bottom: 2rem;
`

const Section = styled.section`
  padding: 10rem 1.5rem;
  background-color: var(--color-brand-white);
  display: flex;
  color: var(--color-brand-black);
  flex-direction: column;
  align-items: center;
  `

const ContentWrapper = styled.div`
  max-width: 1240px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 1024px){
    gap: 4rem;
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  cursor: pointer;
`
const PictureWrapper = styled.div`
  width: 400px;
  /* aspect-ratio: 16/9; */
  background-color: var(--color-brand-black);
`

const Picture = styled.img`
  padding: 1.8rem;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease; 
  
  ${PictureWrapper}:hover & {
    transform: scale(1.1);
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
  
`

function LatestUpdates() {
  return (
    <Section>
      <Title>
        LATEST UPDATES ON OUR BLOG
      </Title>

      <ContentWrapper>
        {BLOG_CONTENT.map(el =>
          <Content key={el.h2}>
            <PictureWrapper>
              <Picture src={el.img} />
            </PictureWrapper>
            <Description>
              <h2>{el.h2}</h2>
              {el.description}
            </Description>

          </Content>
        )}
      </ContentWrapper>
    </Section>
  )
}

export default LatestUpdates;
