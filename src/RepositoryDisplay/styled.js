import styled from "styled-components";

export const StyledRepositoryDisplay = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: row;

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    grid-template-columns: 1fr;
  }
`;
