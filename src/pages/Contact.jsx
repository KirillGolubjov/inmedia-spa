import styled from "styled-components"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Map from "../leaflet/Map";
import SingUpModal from "../ui/SingUpModal";

const StyledSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 10rem 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-brand-black);
  color: var(--color-brand-white);
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
   @media screen and (max-width: 1110px){
    
  }
  `

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  `
const Block = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap}rem;
  font-size: 16px;
  justify-content: space-between;
`

const StyledP = styled.p`
  font-size: 13px;
  opacity: 0.6;
  margin-left: 3rem;
`

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyledIcon = styled.span`
  font-size: ${(props) => props.$fontSize}px;
  display: flex;
  align-items: center;
`


function Contact() {
  return (
    <StyledSection>
      <Content>
        <Block $flexDirection={'column'} $gap={'2'}>
          <h1>CONTACT</h1>
          In case you have any questions, feel free to contact us!
          <StyledSpan>
            <StyledIcon $fontSize='22'>
              <IoLocationSharp />
            </StyledIcon>  
            Narva mnt. 4, Tallinn, Estonia
          </StyledSpan>
        </Block>
        <Block >
          <Block $flexDirection={'column'} $gap={'1'}>
            <StyledSpan>
              <StyledIcon $fontSize='17'>
                <FaPhoneVolume />
              </StyledIcon>
              <a href='tef:+3725511168'>+372 55 111 68</a> 
            </StyledSpan>
            <StyledP>Affiliate Manager</StyledP>
            
          </Block>
          <Block $flexDirection={'column'} $gap={'1'}>
            <StyledSpan>
              <StyledIcon $fontSize='23'>
                <IoIosMail />
              </StyledIcon> 
              info@inmedia.marketing
            </StyledSpan>
            <StyledP>Affiliate Manager</StyledP>
            
          </Block>
        </Block>
        <Block $flexDirection={'row'}>
          <SingUpModal variation={'mainButton1'} size={'middle'} type='PUBLISHER'>
              Publisher
            </SingUpModal>
          <SingUpModal variation={'mainButton2'} size={'middle'} type='ADVERTISER'>
              Advertiser
            </SingUpModal>
        </Block>
      </Content>

      <Map />
    </StyledSection >
  )
}

export default Contact
