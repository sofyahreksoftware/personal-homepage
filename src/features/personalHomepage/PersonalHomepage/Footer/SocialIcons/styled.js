import styled from "styled-components";

export const StyledSocialIcons = styled.aside`
  margin: 0;
  padding: 0;
`;

export const IconsList = styled.ul`
  list-style-type: none;
  margin: 56px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    gap: 16px;
    margin: 40px 0 0 0;
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  fill: ${({ theme }) => theme.colors.icons.simple.normal};
  transition: fill 0.5s ease;
  height: auto;

  &:hover {
    fill: ${({ theme }) => theme.colors.icons.simple.highlighted};
  }

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    width: 32px;
  }
`;
