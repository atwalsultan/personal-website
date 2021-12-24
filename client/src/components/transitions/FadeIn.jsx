import styled, { keyframes } from "styled-components";

const getOpacity = () => keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default styled("div")`
  animation: ${getOpacity()};
  animation-duration: ${({ duration }) => `${duration}ms`};
`;
