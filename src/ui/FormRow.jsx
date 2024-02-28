import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* grid-template-columns: 24rem 1fr 1.2fr; */
  /* gap: 2.4rem; */
  /* width: 350px; */

  padding: 1rem 1rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }


  &:has(button) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row; 
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-brand-red);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  )
}

export default FormRow