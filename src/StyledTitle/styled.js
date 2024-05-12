import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-weight: 900px;
  font-size: 30px;
  line-height: 36.31px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 8px 0 0 18px;
  letter-spacing: 1.5px;
  padding: 0 0 13px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cornflowerBlue};

  ${({ as }) =>
    as === "h1" &&
    css`
      as: "h1";
      display: flex;
      align-self: center;
      border-bottom: none;
      font-size: 38px;
      line-height: 45.99px;
      margin: 0;
    `}
`;

export const TitleAdditionalContent = styled.b`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.slateGray};
  font-size: 18px;
  line-height: 15.6px;
  font-weight: 700px;
  margin: 0;
`;
