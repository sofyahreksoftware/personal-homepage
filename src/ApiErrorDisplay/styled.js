import styled from "styled-components";

export const StyledApiErrorDisplay = styled.article`
  text-align: center;
  margin: 88px auto 68px;
`;

export const Warning = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 16px auto 32px;
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 0 auto 32px;
`;
