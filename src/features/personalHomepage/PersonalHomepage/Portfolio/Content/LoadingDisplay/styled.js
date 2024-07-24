import styled, { keyframes } from "styled-components";

import { ReactComponent as LoadingIcon } from "../../../../../../assets/loading.svg";

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
  height: auto;

  .svg-circle {
    stroke: ${({ theme }) => theme.colors.icons.loading.circle};
  }
  .svg-path {
    stroke: ${({ theme }) => theme.colors.icons.loading.path};
  }
  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    width: 60px;
  }
`;
