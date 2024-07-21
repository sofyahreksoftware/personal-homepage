import { nanoid } from "nanoid";

import { StyledRepositoryDisplay } from "./styled";
import { RepositoryCard } from "./RepositoryCard";

export const RepositoryDisplay = ({ repositoriesData }) => (
  <StyledRepositoryDisplay>
    {repositoriesData?.map((repoData) => (
      <RepositoryCard
        key={nanoid()}
        title={repoData.name.replace(/[_]/g, "-")}
        description={repoData.description}
        demoLink={repoData.homepage}
        repoLink={repoData.html_url}
      />
    ))}
  </StyledRepositoryDisplay>
);
