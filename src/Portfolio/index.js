import { useApiData } from "../useApiData";

import { Entry } from "./styled";
import { StyledSection } from "../SharedStyles/SectionStyles";
import { Title, Subtitle } from "../SharedStyles/TitleStyles";
import { RepositoryDisplay } from "../RepositoryDisplay";
import { ReactComponent as GitHubIcon } from "../assets/blueGithub.svg";
import { ApiErrorDisplay } from "../ApiErrorDisplay";

export const Portfolio = () => {
  const { repositoriesData } = useApiData();

  return (
    <StyledSection>
      <Entry>
        <GitHubIcon />
        <Title $withoutBorder>Portfolio</Title>
        <Subtitle>My recent projescts</Subtitle>
      </Entry>
      {repositoriesData && (
        <RepositoryDisplay repositoriesData={repositoriesData} />
      )}
      {!repositoriesData && <ApiErrorDisplay />}
    </StyledSection>
  );
};
