import styled from "styled-components";

export const StatusMessage = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.main};
  margin: 0 auto 32px;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    font-size: 17px;
  }
`;
