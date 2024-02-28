import styled from "styled-components"
import { useMoveBack } from "../hooks/useMoveBack"
import Button from "../ui/Button"

const Content = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 18px;
`

function PageNotFound() {
  const moveBack = useMoveBack()

  return (
    <Content>
      The page you are looking for could not be found 😢
      <Button onClick={moveBack} $size="middle" $variation='headerButton'>
        &larr; Go back
      </Button>
    </Content>
  )
}

export default PageNotFound
