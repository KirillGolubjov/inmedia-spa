import styled, { keyframes } from 'styled-components';
import { MAIN_TITLE } from '../../common/consts';
import SingUpModal from '../../ui/SingUpModal';
import CanvasAnimation from './CanvasAnimation';



const StyleButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  z-index: 1;
`

const StyledH1 = styled.h1`
  word-spacing: 5px;
`

const Section = styled.section`
  /* height: 75vh; */
  background-color: var(--color-brand-black);
  padding: 15rem 0;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px){
    padding: 6rem 0 4rem;
  }
  `

const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 3rem;
  

  @media screen and (max-width: 1050px){
    gap: 0rem;
  }
  @media screen and (max-width: 868px){
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 4rem;
  }
`

const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 1024px){
    width: 512px;
  }
   @media screen and (max-width: 430px){
    width: 350px;
  }
   @media screen and (max-width: 390px){
    width: 315px;
  }
`

const StyledText = styled.div`
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3rem;
  width: ${(props) => props.width}px;
`

const commonKeyframeProperties = `
  0% {
    transform: translateZ(400px);
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    transform: translateZ(200px);
    letter-spacing: 0.3em;
    opacity: 1;
  } 
`;

const trackingInContractBck = keyframes`
  ${commonKeyframeProperties}
  0% {
    letter-spacing: 1.2em;
  }
`;

const trackingInContractBck2 = keyframes`
  ${commonKeyframeProperties}
  0% {
    letter-spacing: 0.82em;
  }
`;

const trackingInContractBck3 = keyframes`
  ${commonKeyframeProperties}
  0% {
    letter-spacing: 0.78em;
  }
`;
const trackingInContractBck4 = keyframes`
  ${commonKeyframeProperties}
  0% {
    letter-spacing: 0.7em;
  }
`;


const StyledAnimation = styled.div`
  width: 300px;
  animation: ${trackingInContractBck} 10s ease-in-out infinite;
  font-size: 40px;
  @media screen and (max-width: 1024px){
    font-size: 36px;
    animation: ${trackingInContractBck2} 10s ease-in-out infinite;
  }
  @media screen and (max-width: 912px){
    font-size: 34px;
  }
  @media screen and (max-width: 820px){
    animation: ${trackingInContractBck3} 10s ease-in-out infinite;
    padding-top: 4rem;
  }
  @media screen and (max-width: 412px){
    animation: ${trackingInContractBck4} 10s ease-in-out infinite;
  }
  @media screen and (max-width: 375px){
    animation: ${trackingInContractBck4} 10s ease-in-out infinite;
  }
  
`;



function MainSection() {

  return (
    <Section>
      <Container>
        <Wrapper >
          <StyledText>
            <StyledH1>{MAIN_TITLE}</StyledH1>
            <span>
              <p>Catch your change to become a part of the best.</p>
              <p>Find Your Own Flow with Us</p>
            </span>

            <StyleButtonWrapper>
              <SingUpModal variation={'mainButton1'} size={window.innerWidth <= 1024 ? 'middle' : 'big'} type='PUBLISHER'>
                Publisher
              </SingUpModal>
              <SingUpModal variation={'mainButton2'} size={window.innerWidth <= 1024 ? 'middle' : 'big'} type='ADVERTISER'>
                Advertiser
              </SingUpModal>
            </StyleButtonWrapper>
          </StyledText>
        </Wrapper >
        <Wrapper >
          <StyledAnimation>UNLOCK<br /> YOUR<br /> POTENTIAL<br /> WITH <br />INMEDIA</StyledAnimation>
        </Wrapper>
        {/* <CanvasAnimation /> */}
      </Container>
    </Section >
  )
}

export default MainSection
