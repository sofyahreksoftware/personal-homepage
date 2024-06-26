import { useApiData } from "../useApiData";

import { Entry } from "./styled";
import { StyledSection } from "../SharedStyles/SectionStyles";
import { Title, Subtitle } from "../SharedStyles/TitleStyles";
import { LoadingDisplay } from "../LoadingDisplay";
import { RepositoryDisplay } from "../RepositoryDisplay";
import { ApiErrorDisplay } from "../ApiErrorDisplay";
import { ReactComponent as GitHubIcon } from "../assets/blueGithub.svg";

export const Portfolio = () => {
  const { repositoriesData, fetchingStatus } = useApiData();

  return (
    <StyledSection $forPortfolio>
      <Entry>
        <GitHubIcon />
        <Title $withoutBorder>Portfolio</Title>
        <Subtitle>My recent projescts</Subtitle>
      </Entry>
      {fetchingStatus === "loading" && <LoadingDisplay />}
      {fetchingStatus === "success" && (
        <RepositoryDisplay repositoriesData={repositoriesData} />
      )}
      {fetchingStatus === "error" && <ApiErrorDisplay />}
    </StyledSection>
  );
};
