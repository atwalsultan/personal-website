import styled, { keyframes } from "styled-components";

const getTransform = () => keyframes`
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateY(0);
  }
`;

const getOpacity = () => keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default styled("div")`
  animation: ${getTransform()}, ${getOpacity()};
  animation-duration: ${({ duration }) => `${duration}ms`};
`;
