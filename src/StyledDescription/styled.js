import styled, { css } from "styled-components";

export const Description = styled.p`
  margin: 0;
  padding-right: 4px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  line-height: 16.94px;
  color: ${({ theme }) => theme.colors.slateGray};

  ${({ $forFooter }) =>
    $forFooter &&
    css`
      color: ${({ theme }) => theme.colors.black};
      line-height: 25.2px;
      font-size: 18px;
    `}
`;