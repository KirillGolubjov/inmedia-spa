import styled, { css } from "styled-components";

const commonStyles = css`
  line-height: 41px;
  text-transform: capitalize;
`;

const sizes = {
  small: css`
    ${commonStyles}
    padding: 0 25px;
  `,
  medium: css`
    ${commonStyles}
    padding: 0 40px;
    font-size: 16px;
  `,
  middle: css`
    ${commonStyles}
    padding: 0 60px;
    font-size: 16px;
  `,
  big: css`
    ${commonStyles}
    padding: 0 75px;
    font-size: 18px;
  `,
};

const variations = {
  headerButton: css`
    background: var(--color-brand-button);
    color: white;

    &:hover {
      opacity: 0.75;
      transition: opacity 1s ease;
    }
  `,
  mainButton1: css`
    background: none;
    border: 2px solid var(--color-brand-blue);

    &:hover {
      background-color: var(--color-brand-blue);
     
    }
  `,
  mainButton2: css`
    background: none;
    border: 2px solid var(--color-brand-royalblue);

    &:hover {
      background-color: var(--color-brand-royalblue);
      transition: background-color 1s ease;
     
    }
  `,
  sectionFourthButton: css`
    background-color: var(--color-brand-white);
    transition: background-color 1s ease;
    color: var(--color-brand-black);

  `
}

const Button = styled.button`
  border: none;
  
  ${props => sizes[props.$size]}
  ${props => variations[props.$variation]}
  @media screen and (max-width: 912px) {
    ${props => props.$size !== 'small' && sizes['middle']}
  }
  @media screen and (max-width: 768px) {
    ${props => props.$size !== 'small' && sizes['medium']}
  }
  @media screen and (max-width: 540px) {
    ${props => props.$size !== 'small' && sizes['small']}
  }
 
`

Button.defaultProps = {
  $variation: 'headerButton',
  $size: 'small'
}

export default Button;