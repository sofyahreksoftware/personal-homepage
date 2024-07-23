import styled from "styled-components";

import { ReactComponent as ReactIcon } from "../../../../assets/react.svg";

export const StyledBio = styled.header`
  display: grid;
  align-items: center;
  margin-top: 72px;
  max-width: 1216px;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  max-width: 1089px;
  padding: 16px 8px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 6px;
    padding: 4px;
    margin-left: 0;
  }
`;

export const InfoCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  align-items: center;
  padding: 58px 0 0;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    gap: 10px;
  }
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.tablet}px) {
    width: 267px;
    height: 267px;
    margin: -30px 0;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.mediaBreakpoints.mobile}px) {
    width: 178px;
    height: 178px;
  }
`;

export const StyledReactIcon = styled(ReactIcon)`
  fill: ${({ theme }) => theme.colors.icons.simple.highlighted};
`;
