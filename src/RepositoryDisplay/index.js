import { useApiData } from "../useApiData";

import { StyledRepositoryDisplay } from "./styled";
import { RepositoryCard } from "../RepositoryCard";

export const RepositoryDisplay = () => {
  const { repositoriesData } = useApiData();

  return (
    <StyledRepositoryDisplay>
      {repositoriesData?.map((repoData) => (
        <RepositoryCard
          title={repoData.name.replace(/[_]/g, "-")}
          description={repoData.description}
          demoLink={repoData.homepage}
          repoLink={repoData.html_url}
        />
      ))}
    </StyledRepositoryDisplay>
  );
};
