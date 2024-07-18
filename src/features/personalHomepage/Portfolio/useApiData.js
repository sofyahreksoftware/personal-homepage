import axios from "axios";
import { useState, useEffect } from "react";

export const useApiData = ({ apiUrl }) => {
  const [repositoriesData, setRepositoriesData] = useState(null);
  const [fetchingStatus, setFetchingStatus] = useState("loading");

  useEffect(() => {
    const getReposData = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });

        const response = await axios.get(apiUrl);
        setRepositoriesData(response.data);
        setFetchingStatus("success");
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchingStatus("error");
      }
    };

    getReposData();
  }, [apiUrl]);

  return { repositoriesData, fetchingStatus };
};
