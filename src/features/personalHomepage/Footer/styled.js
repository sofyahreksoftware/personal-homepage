import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  padding: 0 8px 0 4px;
  text-align: left;
  margin: 0 0 109px;
  max-width: 670px;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    margin: 0 0 31px;
  }
`;

export const LinksList = styled.ul`
  list-style-type: none;
  margin: 56px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 24px;

  svg {
    fill: ${({ theme }) => theme.colors.icons.simple.normal};
    transition: fill 0.5s ease;
    width: 48px;
    height: 48px;

    &:hover {
      fill: ${({ theme }) => theme.colors.icons.simple.highlighted};
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    gap: 16px;
    margin: 40px 0 0 0;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
