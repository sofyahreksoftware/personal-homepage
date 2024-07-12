import styled from "styled-components";

export const StyledRepositoryDisplay = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(492px, 1fr));
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    gap: 16px;
  }
`;
