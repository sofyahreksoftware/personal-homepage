import styled, { css } from "styled-components";

export const Description = styled.p`
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }

  ${({ $forBio }) =>
    $forBio &&
    css`
      font-size: 20px;
      line-height: 28px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
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
