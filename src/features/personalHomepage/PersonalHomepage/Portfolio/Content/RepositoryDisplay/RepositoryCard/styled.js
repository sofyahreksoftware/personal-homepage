import styled from "styled-components";
import a from "color-alpha";

export const StyledRepositoryCard = styled.article`
  width: 100%;
  padding: 56px;
  background-color: ${({ theme }) => theme.colors.backgrounds.section};
  border: 6px solid ${({ theme }) => theme.colorNames.mistGray};
  border-radius: 5px;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.colorNames.violet},
    0px -2px 50px 0px ${({ theme }) => theme.colorNames.violet2};
  transition: border 0.7s ease;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.tablet}px) {
    padding: 24px;
  }

  &:hover,
  &:active {
    border: 6px solid ${({ theme }) => theme.colors.borders.card};
  }
`;

export const LinkContainer = styled.dl`
  margin: 4px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 8px;
  align-items: start;
  font-size: 18px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => a(theme.colors.borders.link, 0.3)};
  text-underline-offset: 4px;
  color: ${({ theme }) => theme.colors.text.highlighted};

  &:hover {
    text-decoration-color: unset;
  }
`;

export const LinkName = styled.dt`
  color: ${({ theme }) => theme.colors.text.normal};
`;
