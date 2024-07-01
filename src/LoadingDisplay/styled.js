import styled, { keyframes } from "styled-components";

import { ReactComponent as LoadingIcon } from "../assets/loading.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingAnimation = styled(LoadingIcon)`
  animation: ${rotate} 2s linear infinite;
`;
