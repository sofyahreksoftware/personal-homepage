import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 72px auto;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 50px auto;
    padding: 4px;
  }
`;

export const List = styled.ul`
  list-style-type: disc;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(14, 38px);
  grid-auto-flow: column;
  grid-gap: 10px 130px;
  align-items: center;

  & > li::marker {
    color: ${({ theme }) => theme.colors.scienceBlue};
    font-size: 26px;
  }

  ${({ $condensedView }) =>
    $condensedView &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    `}

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
    grid-gap: 4px 18px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
    grid-gap: 4px 0;
  }
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.colors.slateGray};
  margin-bottom: 8px;
`;
