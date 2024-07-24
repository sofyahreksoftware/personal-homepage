import { apiUrl } from "./apiUrl";
import { useApiData } from "./useApiData";
import { ErrorDisplay } from "./ErrorDisplay";
import { LoadingDisplay } from "./LoadingDisplay";
import { RepositoryDisplay } from "./RepositoryDisplay";

export const Content = ({ status }) => {
  const { repositoriesData, fetchingStatus } = useApiData({ apiUrl: apiUrl });

  switch (fetchingStatus) {
    case "initial":
      return null;
    case "loading":
      return <LoadingDisplay />;
    case "error":
      return <ErrorDisplay />;
    case "success":
      return <RepositoryDisplay repositoriesData={repositoriesData} />;

    default:
      throw new Error(`incorrect status: ${fetchingStatus}`);
  }
};
