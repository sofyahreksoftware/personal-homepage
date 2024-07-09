import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 72px auto;
  padding: 16px;
  align-items: center;

  ${({ $white }) =>
    $white &&
    css`
      background-color: ${({ theme }) => theme.colors.backgrounds.section};
    `}

  ${({ $forPortfolio }) =>
    $forPortfolio &&
    css`
      padding: 0;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 50px auto;
    padding: 4px;
    width: 100%;
  }
`;
