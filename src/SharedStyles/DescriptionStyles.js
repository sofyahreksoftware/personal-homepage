import styled, { css } from "styled-components";

export const Description = styled.p`
  padding-right: 4px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.colors.slateGray};
  font-size: 18px;

  ${({ $forBio }) =>
    $forBio &&
    css`
      font-size: 20px;
      line-height: 28px;
    `}

  ${({ $forFooter }) =>
    $forFooter &&
    css`
      color: ${({ theme }) => theme.colors.black};
    `}

    ${({ $forPortfolio }) =>
    $forPortfolio &&
    css`
      margin: 24px 0;
    `}
`;