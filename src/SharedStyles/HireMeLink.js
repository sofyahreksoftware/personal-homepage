import styled, { css } from "styled-components";

export const HireMeLink = styled.a`
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 2px;
  max-width: 200px;
  height: 49px;
  justify-content: center;
  border-radius: 4px;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  text-align: center;
  align-items: center;
  font-size: 20.06px;
  font-weight: 600px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 2s ease-out;

  ${({ $centered }) =>
    $centered &&
    css`
      margin: 0 auto;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.electricBlue};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 24px 0;
  }
`;
