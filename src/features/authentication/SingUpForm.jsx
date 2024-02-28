import styled, { keyframes } from "styled-components"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import signUpImg from "../../assets/images/singup.png"
import { useContext } from "react"
import { ModalContext } from "../../ui/Modal"

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1150px){
    display: flex;
    flex-direction: column-reverse;
  }
`

const StyledH1 = styled.h1`
  /* font-weight: 600; */
  letter-spacing: 1px;
  font-size: 36px;
`

const StyledP = styled.p`
  color: var(--color-brand-blue);
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 1px;
`

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AnimatedArrow = styled.span`
  display: inline-block;
  font-size: 22px;
  margin-right: 6px;
`;

const HoveredButton = styled(Button)`
  position: relative; 
  display: flex;
  &:hover ${AnimatedArrow} {
    animation: ${arrowAnimation} 0.8s linear infinite;
  }
`;

const ImageWrapper = styled.div`
  width: 750px;
  display: flex;
  align-items: center;
  border-left: 1px solid whitesmoke;
  @media screen and (max-width: 1150px){
    width: 460px;
    display: none;
    /* border-bottom: 1px solid whitesmoke; */
  }
`

function SingUpForm({ type }) {
  const { close } = useContext(ModalContext);

  return (
    <ContentWrapper>
      <Form>
        <StyledSpan>
          <StyledH1>SIGN UP</StyledH1>
          <StyledP>{type}</StyledP>
        </StyledSpan>

        <FormRow label="Full name" error={""}>
          <Input type="text" id="fullName" />
        </FormRow>

        <FormRow label="Email address" error={""}>
          <Input type="email" id="email" />
        </FormRow>

        <FormRow label="Password (min 8 characters)" error={""}>
          <Input type="password" id="password" />
        </FormRow>

        <FormRow label="Repeat password" error={""}>
          <Input type="password" id="passwordConfirm" />
        </FormRow>

        <FormRow>
          <HoveredButton $size="middle" $variation="sectionFourthButton" onClick={close}>
            <AnimatedArrow>&larr;</AnimatedArrow> Cancel
          </HoveredButton>
          <Button $size="middle" $variation='headerButton'>Next</Button>
        </FormRow>
      </Form>
      <ImageWrapper>
        <img src={signUpImg} alt='signup' />
      </ImageWrapper>
    </ContentWrapper>
  )
}

export default SingUpForm
