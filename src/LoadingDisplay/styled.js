import styled, { keyframes } from "styled-components";

import { ReactComponent as LoadingIcon } from "../assets/loading.svg";

export const StyledLoadingIcon = styled(LoadingIcon)`
  .svg-circle {
    stroke: ${({ theme }) => theme.colors.icons.loading.circle};
  }
  .svg-path {
    stroke: ${({ theme }) => theme.colors.icons.loading.path};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingAnimation = styled(StyledLoadingIcon)`
  animation: ${rotate} 2s linear infinite;
`;
