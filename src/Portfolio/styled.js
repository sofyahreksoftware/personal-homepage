import styled from "styled-components";

export const Entry = styled.div`
  text-align: center;
`;

export const RepositoryDisplay = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: row;

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    grid-template-columns: 1fr;
  }
`;
