import styled from 'styled-components'
import { SWEEPSTAKES, SWEEPSTAKES_TEXT, VOD, VOD_TEXT } from '../../common/consts'

const Title = styled.h1`
  color: hsla(0,0%,100%,.2);
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  `
  
const Span = styled.span`
  display: flex;
  gap: 6px;
`
const Section = styled.section`
  padding: 10rem 0;
  position: relative;
  background-color: var(--color-brand-black);
  color: var(--color-brand-white);
  `

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media screen and (max-width: 1024px){
    padding: 0 30px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
   @media screen and (max-width: 767px){
    flex-direction: column;
    gap: 2rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 16px;
  margin-left: 10rem;
  @media screen and (max-width: 430px){
    padding-right: 4rem;
  }
`

const Items = styled.div`
  padding: 2.5rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 30rem;
`;

const ItemWrapper = styled.div`
  position: relative;
`;

const ItemText = styled.div`
  padding-left: 1rem;
  text-transform: uppercase;
  font-size: 18px;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const LineBefore = styled(Line)`
  left: -2rem;
  width: 2rem;
  height: 1px;
  background: #3648eb;
`;

const LineAfter = styled(Line)`
  right: 18.5rem;
  transform: translateY(-50%) translateX(-625%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #000;
`;


const Separator = styled.div`
  width: 100%;
  height: 2px;
  background: #3648eb;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 100%; 
    width: 2px; 
    height: ${(props) => props.$height}rem;
    background: #3648eb; 
  }
`;

function VerticalsInfo() {
  return (

    <Section>
      <Container>
        <Title>VERTICALS</Title>
        <Wrapper>
          <div>
            <h1>SWEEPSTAKES</h1>
            <Separator $height={'13.3'} />
            <Items>
              {SWEEPSTAKES.map(el =>
                <ItemWrapper key={el}>
                  <LineBefore />
                  <ItemText>{el}</ItemText>
                  <LineAfter />
                </ItemWrapper>)
              }
            </Items>
          </div>

          <Content>
            {SWEEPSTAKES_TEXT.map((item, index) => (
              <Span key={index}>
                <p>
                  <strong>{item.title}</strong> {item.description}
                </p>
              </Span>
            ))}
          </Content>

        </Wrapper>

        <Wrapper>
          <div>
            <h1>VOD</h1>
            <Separator $height={'21'} />
            <Items>
              {VOD.map(el =>
                <ItemWrapper key={el}>
                  <LineBefore />
                  <ItemText>{el}</ItemText>
                  <LineAfter />
                </ItemWrapper>
              )}
            </Items>
          </div>

          <Content>
            {VOD_TEXT.map((item, index) => (
              <Span key={index}>
                <p>
                  <strong>{item.title}</strong> {item.description}
                </p>
              </Span>
            ))}
          </Content>
        </Wrapper>

      </Container>
    </Section>
  )
}

export default VerticalsInfo;