import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  padding: 0 8px 0 4px;
  text-align: left;
  margin: 0 0 109px;
  max-width: 670px;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    margin: 0 0 31px;
  }
`;
