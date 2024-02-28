import { useEffect } from 'react';
import styled from 'styled-components';
import { initAnimation } from '../../common/animation';

const StyledDiv = styled.div`

`
function CanvasAnimation() {

  useEffect(() => {
    initAnimation();
  }, []);

  return (
    <StyledDiv>
      <canvas></canvas>
    </StyledDiv>
  )
}

export default CanvasAnimation
