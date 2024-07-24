import { Entry, StyledGitHubIcon } from "./styled";
import { StyledSection } from "../../../../common/SharedStyles/SectionStyles";
import { Title, Subtitle } from "../../../../common/SharedStyles/TitleStyles";
import { Content } from "./Content";

export const Portfolio = () => (
  <StyledSection $forPortfolio>
    <Entry>
      <StyledGitHubIcon />
      <Title $withoutBorder>Portfolio</Title>
      <Subtitle>My recent projescts</Subtitle>
    </Entry>
    <Content />
  </StyledSection>
);
