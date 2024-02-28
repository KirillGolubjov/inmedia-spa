import styled from "styled-components";
import SingUpModal from "../../ui/SingUpModal";

const StyledP = styled.p`
  font-size: 16px;
`

const Section = styled.section`
  display: flex;
  flex-direction: flex-wrap;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
  `

const Content = styled.div`
  padding: 8rem 15px;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.$backgroundColor};
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: transparent;
    transition: all 1s ease;
    pointer-events: none
  }

  &::before {
    top: 10px;
    left: 10px;
    width: 0; 
    height: 0;
    border-top: 2px solid transparent; 
    border-left: 2px solid transparent;
  }

  &::after {
    bottom: 10px; 
    right: 10px;
    width: 0; 
    height: 0; 
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  &:hover::before,
  &:hover::after {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-color: #fff; 
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
`

const StyledH1 = styled.h1`
  @media screen and (max-width: 400px){
    font-size: 25px;
  }
`

function PublisherAdvertiser() {
  return (
    <Section>
      <Content $backgroundColor='#3648eb' >
        <StyledH1>PUBLISHER</StyledH1>
        <StyledP>
          Your Flow starts here!
        </StyledP>
        <SingUpModal variation={'sectionFourthButton'} size={'big'} type='PUBLISHER'>
          Sign Up
        </SingUpModal>
      </Content>

      <Content $backgroundColor='#3d90f2' >
        <StyledH1>ADVERTISER</StyledH1>
        <StyledP>
          Let Flow comes to you!
        </StyledP>
        <SingUpModal variation={'sectionFourthButton'} size={'big'} type='ADVERTISER'>
          Sign Up
        </SingUpModal>
      </Content>
    </Section>
  )
}

export default PublisherAdvertiser
