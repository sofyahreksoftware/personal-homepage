import styled, { css } from "styled-components";

export const HireMeLink = styled.a`
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 2px;
  max-width: 154px;
  height: 49px;
  justify-content: center;
  border-radius: 4px;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.backgrounds.link};
  text-align: center;
  align-items: center;
  font-size: 20.06px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.link.text};
  transition: background-color 2s ease-out;
  border: 1px solid ${({ theme }) => theme.colorNames.cornflowerBlue};
  cursor: pointer;

  ${({ $centered }) =>
    $centered &&
    css`
      margin: 0 auto;
    `}

  &:hover,
  &:focus {
    box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.colors.link.focused},
      2px 2px 0px 0px ${({ theme }) => theme.colors.link.focused},
      -2px 2px 0px 0px ${({ theme }) => theme.colors.link.focused},
      2px -2px 0px 0px ${({ theme }) => theme.colors.link.focused};
  }

  &:active {
    box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.colorNames.forestMist}
      inset;
  }

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    margin: 24px 0;
  }
`;
