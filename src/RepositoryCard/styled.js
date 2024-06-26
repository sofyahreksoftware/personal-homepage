import styled from "styled-components";

export const StyledRepositoryCard = styled.article`
  width: 100%;
  padding: 56px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    padding: 24px;
  }
`;

export const LinkContainer = styled.div`
  margin: 4px 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.scienceBlue};
  border-bottom: solid 1px ${({ theme }) => theme.colors.scienceBlue};
`;

export const LinkName = styled.b`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.colors.slateGray};
`;
