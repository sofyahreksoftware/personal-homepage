import styled from "styled-components";

export const StyledBio = styled.header`
  display: grid;
  margin: 72px 0;
  text-align: left;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  max-width: 1089px;
  padding: 16px 4px;

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

export const HireMeLink = styled.a`
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 2px 2px 2px 16px;
  width: 154px;
  height: 49px;
  border-radius: 4px;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  text-align: center;
  align-items: center;
  font-size: 20.06px;
  font-weight: 600px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.electricBlue};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 24px 0;
  }
`;
