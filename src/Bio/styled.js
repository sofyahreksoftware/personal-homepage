import styled from "styled-components";

export const StyledBio = styled.header`
  display: grid;
  margin-top: 72px;
  max-width: 1216px;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  max-width: 1089px;
  padding: 16px 8px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 6px;
    padding: 4px;
  }
`;

export const InfoCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  align-items: center;
  padding: 58px 10px 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    gap: 10px;
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 178px;
    height: 178px;
    margin: -30px 13px;
    padding: 0;
  }
`;
