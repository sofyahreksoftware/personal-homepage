import styled from "styled-components";

export const StyledRepositoryCard = styled.article`
  width: 100%;
  padding: 56px;
  background-color: ${({ theme }) => theme.colors.backgrounds.section};
  border: 6px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.colors.shadow.internal},
    0px -2px 50px 0px ${({ theme }) => theme.colors.shadow.external};

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    padding: 24px;
  }
`;

export const LinkContainer = styled.div`
  margin: 4px 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.link.highlightedText};
  border-bottom: solid 1px ${({ theme }) => theme.colors.underlinings.link};
`;

export const LinkName = styled.b`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.colors.text.normal};
`;
