import { useApiData } from "../useApiData";

import { Entry, RepositoryDisplay } from "./styled";
import { StyledSection } from "../SharedStyles/SectionStyles";
import { Title, Subtitle } from "../SharedStyles/TitleStyles";
import { RepositoryCard } from "../RepositoryCard";
import { ReactComponent as GitHubIcon } from "../assets/blueGithub.svg";

export const Portfolio = () => {
  const { repositoriesData } = useApiData();
  return (
    <StyledSection>
      <Entry>
        <GitHubIcon />
        <Title $withoutBorder>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Entry>
      <RepositoryDisplay>
        {repositoriesData?.map((repoData) => (
          <RepositoryCard
            title={repoData.name.replace(/[_]/g, "-")}
            description={repoData.description}
            demoLink={repoData.homepage}
            repoLink={repoData.html_url}
          />
        ))}
      </RepositoryDisplay>
    </StyledSection>
  );
};
