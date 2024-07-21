import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 72px auto;
  padding: 16px 0;
  align-items: center;

  ${({ $white }) =>
    $white &&
    css`
      background-color: ${({ theme }) => theme.colors.backgrounds.section};
      box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.commonColors.violet},
              0px -2px 50px 0px ${({ theme }) => theme.commonColors.violet2};
    `}

  ${({ $forPortfolio }) =>
    $forPortfolio &&
    css`
      padding: 0;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 50px auto;
    padding: 4px 0;
    width: 100%;
  }
`;
