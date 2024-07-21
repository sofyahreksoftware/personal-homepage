import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 72px auto;
  padding: 16px 0;
  align-items: center;

  ${({ $white }) =>
    $white &&
    css`
      background-color: ${({ theme }) => theme.colors.backgrounds.section};
      box-shadow: ${({ theme }) => theme.boxShadow};
    `}

  ${({ $forPortfolio }) =>
    $forPortfolio &&
    css`
      padding: 0;
    `}

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    margin: 50px auto;
    padding: 4px 0;
    width: 100%;
  }
`;
