import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900px;
  font-size: 26px;
  line-height: 36.31px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 8px 0 0 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
`;
