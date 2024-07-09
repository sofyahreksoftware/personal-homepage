import styled, { css } from "styled-components";

export const StyledToggleMode = styled.div`
  margin-top: 119px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: right;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 22px 17px 0 0;
  }
`;

export const StatusText = styled.p`
  color: ${({ theme }) => theme.colors.text.normal};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.media.mobile}PX) {
    display: none;
  }
`;

export const StatusIndicator = styled.em`
  font-style: none;
`;

export const ToggleButton = styled.button`
  width: 47px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.colors.icon.internalBorder};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.icon.externalBorder};
  background-color: ${({ theme }) => theme.colors.icon.mainBackground};
  border-radius: 50px;
  padding: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  transition: 0.5s;

  ${({ $iconToRight }) =>
    $iconToRight &&
    css`
      justify-content: right;
    `}
`;

export const IconBackground = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.icon.background};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
