import { useEffect, useState } from "react";

import { IRepository } from "interfaces/repository";

import { api } from "services/api";

export const useRespositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    async function getRepositories() {
      await api
        .get(`users/${process.env.REACT_APP_USER}/repos`)
        .then((response) => setRepositories(response.data));
    }

    getRepositories();
  }, []);

  return { repositories };
};
