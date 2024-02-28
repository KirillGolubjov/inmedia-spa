import styled from 'styled-components';
import { BECOME_A_PARTNER, PERKS, WHY_US, WHY_US_ANIMATION, WHY_US_EXPLANATION } from '../../common/consts';

const StyledUl = styled.ul`
  list-style: initial;
  padding-left: 2rem; 
  line-height: 3.4rem;
`;

const StyledP = styled.p`
  font-size: ${(props) => props.$fontSize}px;
`

const Section = styled.section`
  padding: 8rem 0;
  background-color: var(--color-brand-white);
  color: var(--color-brand-black);
  `

const Container = styled.div`
  max-width: 1240px;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
  }
 
`

const WhyUsFirst = styled.div`
  display: flex;
  position: relative;
  height: 300px;
  @media screen and (max-width: 1200px){
    transform: scale(.95);
    right: 2%;
  }
  @media screen and (max-width: 1150px){
    transform: scale(.9);
    right: 4%;
  }
  @media screen and (max-width: 1100px){
    transform: scale(.85);
    right: 6%;
  }
  @media screen and (max-width: 1050px){
    transform: scale(.8);
    right: 8%;
  }
  @media screen and (max-width: 1000px){
    transform: scale(.9);
    right: -15%;
    top: -70%;
  }
  @media screen and (max-width:950px){
    transform: scale(.85);
    right: -15%;
    top: -60%;
  }
  @media screen and (max-width: 850px){
    transform: scale(.8);
    right: -15%;
    top: -50%;
  }
  @media screen and (max-width: 768px){
   transform: scale(.8);
    right: -11%;
    top: -40%;
  }
  @media screen and (max-width: 650px){
   transform: scale(.75);
    right: -8%;
    top: -35%;
  }
  @media screen and (max-width: 600px){
    right: -5%;
    top: -32%;
  }
  @media screen and (max-width: 550px){
    transform: scale(.7);
    right: -3%;
    top: -24%;
  }
  @media screen and (max-width: 450px){
    transform: scale(.65);
    right: 8%;
    top: -22%;
  }
  @media screen and (max-width: 414px){
    transform: scale(.65);
    right: 13%;
    top: -15%;
  }
  @media screen and (max-width: 375px){
   transform: scale(.6);
    right: 10%;
    top: -10%;
  }
`


const AnimatedWords = styled.ul`
  width: 100%; 
  position: absolute;
  right: 0%;
  top: 10%;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  transform: translateZ(0);
  /* @media screen and (max-width: 800px){
    margin-top: 2rem;
  } */
`

const InnerWordsLine = styled.div`
  height: 42px;
  overflow: hidden;
  position: relative;


    &:nth-child(odd) {
        transform: skew(64deg, 330deg) scaleY(0.6);
    }

    &:nth-child(2n) {
        transform: skew(0deg, -30deg) scaleY(1.3);
    }

    &:first-child {
        left: 29px;
    }

    &:nth-child(2) {
        left: 58px;
    }

    &:nth-child(3) {
        left: 87px;
    }

    &:nth-child(4) {
        left: 116px;
    }

    &:nth-child(5) {
        left: 145px;
    }

    &:nth-child(6) {
        left: 174px;
    }

    &:nth-child(7) {
        left: 203px;
    }

`;

const AnimatedWord = styled.p`
    height: 44px;
    line-height: 44px;
    transition: all 0.4s ease-in-out;
    filter: blur(0.5px);
`;

const HoverContainer = styled.div`
    ${AnimatedWords}:hover & ${AnimatedWord} {
        transform: translate3d(0, -40px, 0);
  
    }
`;

const Text = styled.div`
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%; 
   @media screen and (max-width: 1000px){
    margin-top: 4rem;
  }
  @media screen and (max-width: 430px){
    padding: 2rem;
  }
`


function WhyUs() {
  return (
    <Section>
      <Container>
        <WhyUsFirst>
          <AnimatedWords>
            {WHY_US_ANIMATION.map((el, i) => (
              <InnerWordsLine key={i}>
                <HoverContainer>
                  <AnimatedWord>{el.first}</AnimatedWord>
                  <AnimatedWord>{el.second}</AnimatedWord>
                </HoverContainer>
              </InnerWordsLine>
            ))}
          </AnimatedWords>
        </WhyUsFirst>


        <Text >
          <h1>
            {WHY_US}
          </h1>
          <StyledP $fontSize='18'>
            {WHY_US_EXPLANATION}
          </StyledP>
          <StyledP $fontSize='18'>
            {BECOME_A_PARTNER}
          </StyledP>

          <StyledUl>
            {PERKS.map(perk => <li key={perk}>
              <StyledP $fontSize='15'>{perk}</StyledP>
            </li>)
            }
          </StyledUl>
        </Text>

      </Container>
    </Section>
  )
}

export default WhyUs
