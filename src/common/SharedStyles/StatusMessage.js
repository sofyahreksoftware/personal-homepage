import styled from "styled-components";

export const StatusMessage = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.main};
  margin: 0 auto 32px;
`;
