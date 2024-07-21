import styled, { css } from "styled-components";

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.normal};

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }

  ${({ $forBio }) =>
    $forBio &&
    css`
      font-size: 20px;
      line-height: 1.4;

      @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
        font-size: 17px;
        line-height: 1.4;
        margin: 0;
      }
    `}

  ${({ $forFooter }) =>
    $forFooter &&
    css`
      color: ${({ theme }) => theme.colors.text.main};
    `}

    ${({ $forPortfolio }) =>
    $forPortfolio &&
    css`
      margin: 24px 0;
    `}
`;
