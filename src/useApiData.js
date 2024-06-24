import axios from "axios";
import { useState, useEffect } from "react";

export const useApiData = () => {
  const [repositoriesData, setRepositoriesData] = useState(null);

  useEffect(() => {
    const getReposData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/sofyahreksoftware/repos"
        );
        setRepositoriesData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getReposData();
  }, []);

  return { repositoriesData };
};
