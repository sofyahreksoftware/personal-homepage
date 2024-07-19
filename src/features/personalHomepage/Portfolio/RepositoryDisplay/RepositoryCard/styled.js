import styled from "styled-components";

export const StyledRepositoryCard = styled.article`
  width: 100%;
  padding: 56px;
  background-color: ${({ theme }) => theme.colors.backgrounds.section};
  border: 6px solid ${({ theme }) => theme.commonColors.mistGray};
  border-radius: 5px;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.commonColors.violet},
    0px -2px 50px 0px ${({ theme }) => theme.commonColors.violet2};
  transition: border 0.7s ease;

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    padding: 24px;
  }

  &:hover,
  &:active {
    border: 6px solid ${({ theme }) => theme.colors.borders.card};
  }
`;

export const LinkContainer = styled.div`
  margin: 4px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 8px;
  align-items: start;
`;

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.borders.link};
  text-underline-offset: 4px;
  color: ${({ theme }) => theme.colors.text.highlighted};
  padding-top: 4px;
`;

export const LinkName = styled.b`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  align-self: top;
  color: ${({ theme }) => theme.colors.text.normal};
`;
