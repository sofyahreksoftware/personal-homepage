import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  padding: 0 8px 0 4px;
  text-align: left;
  gap: 24px;
  margin: 0 8px;
  max-width: 670px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    gap: 12px;
  }
`;

export const LinksList = styled.ul`
  list-style-type: none;
  margin: 32px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 25px;

  svg {
    fill: ${({ theme }) => theme.colors.icons.simple.normal};
    transition: fill 1s ease;

    &:hover {
      fill: ${({ theme }) => theme.colors.icons.simple.highlighted};
    }
  }
`;
