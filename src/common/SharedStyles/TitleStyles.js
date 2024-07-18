import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36.31px;
  color: ${({ theme }) => theme.colors.text.main};
  margin: 8px 0 0 18px;
  padding: 12px 0 13px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.header};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 26px;
    line-height: 21.78px;
  }

  ${({ $withoutBorder }) =>
    $withoutBorder &&
    css`
      border-bottom: none;
      margin-left: 0;
    `}

  ${({ $forFooter }) =>
    $forFooter &&
    css`
      border-bottom: none;
      margin-left: 0;
      transition: color 1s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.text.highlighted};
      }
    `}
    
  ${({ as }) =>
    as === "h1" &&
    css`
      display: flex;
      align-items: center;
      border-bottom: none;
      font-size: 38px;
      line-height: 45.99px;
      margin: 0;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-size: 32px;
        line-height: 26.63px;
      }
    `}

  ${({ as, theme }) =>
    as === "h5" &&
    css`
      color: ${theme.colors.text.highlighted};
      font-weight: 700;
      border-bottom: none;
      font-size: 24px;
      line-height: 29.05px;
      margin: 0;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-size: 20px;
        line-height: 19.36px;
      }
    `}
`;

export const TitleAdditionalContent = styled.b`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 12px;
  line-height: 15.6px;
  font-weight: 700px;
  margin: 0;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text.main};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 17px;
    line-height: 23.8px;
  }
`;
