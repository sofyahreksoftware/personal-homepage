import styled from "styled-components";

export const List = styled.ul`
  list-style-type: disc;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
  grid-gap: 10px 115px;
  align-items: center;

  & > li::marker {
    color: ${({ theme }) => theme.colors.list.bullet};
    font-size: 26px;
  }
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.colors.list.text};
  margin-bottom: 8px;
`;
