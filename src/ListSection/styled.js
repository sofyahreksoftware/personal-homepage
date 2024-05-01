import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  max-width: 1216px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 72px auto;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 50px auto;
    padding: 4px;
  }
`;

export const Title = styled.h2`
  font-weight: 900px;
  font-size: 26px;
  line-height: 36.31px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 8px 0 0 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
`;

export const List = styled.ul`
  list-style-type: disc;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(13, 30px);
  grid-auto-flow: column;
  grid-gap: 8px 130px;
  color: ${({ theme }) => theme.colors.slateGray};

  & > li::marker {
    color: ${({ theme }) => theme.colors.cornflowerBlue};
    font-size: 18px;
  }

  ${({ $condensedView }) =>
    $condensedView &&
    css`
      grid-template-rows: repeat(2, 30px);
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
    grid-gap: 4px 0;
  }
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;
