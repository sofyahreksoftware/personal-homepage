import { Entry } from "./styled";
import { StyledSection } from "../SharedStyles/SectionStyles";
import { Title, Subtitle } from "../SharedStyles/TitleStyles";
import { RepositoryDisplay } from "../RepositoryDisplay";
import { ReactComponent as GitHubIcon } from "../assets/blueGithub.svg";

export const Portfolio = () => {
  return (
    <StyledSection>
      <Entry>
        <GitHubIcon />
        <Title $withoutBorder>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Entry>
      <RepositoryDisplay />
    </StyledSection>
  );
};
