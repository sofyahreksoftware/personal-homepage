import { useApiData } from "./RepositoryDisplay/useApiData";

import { Entry, StyledGitHubIcon } from "./styled";
import { StyledSection } from "../../../common/SharedStyles/SectionStyles";
import { Title, Subtitle } from "../../../common/SharedStyles/TitleStyles";
import { LoadingDisplay } from "./LoadingDisplay";
import { RepositoryDisplay } from "./RepositoryDisplay";
import { ApiErrorDisplay } from "./ApiErrorDisplay";

export const Portfolio = () => {
  const { repositoriesData, fetchingStatus } = useApiData();

  return (
    <StyledSection $forPortfolio>
      <Entry>
        <StyledGitHubIcon />
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
