import styled from "styled-components";

export const List = styled.ul`
  list-style-type: disc;
  font-size: 18px;
  line-height: 1.4;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
  grid-gap: 8px 115px;
  align-items: top;

  & > li::marker {
    color: ${({ theme }) => theme.colors.bullet};
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    font-size: 14px;
    line-height: 1.2;
    padding: 14px;
    margin-left: 18px;

    & > li::marker {
      font-size: 22px;
    }
  }
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.colors.text.normal};
`;
