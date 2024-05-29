import styled, { css } from "styled-components";

export const Description = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.slateGray};

  ${({ $forFooter }) =>
    $forFooter &&
    css`
      color: ${({ theme }) => theme.colors.black};
      line-height: 25.2px;
      font-size: 18px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        max-width: 288px;
      }
    `}
`;
