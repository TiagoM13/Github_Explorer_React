import { useEffect, useState } from "react";

import { IRepository } from "interfaces/repository";

import { api } from "services/api";

export const useRespositories = () => {
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    setLoading(true);
    async function getRepositories() {
      await api
        .get(`users/${process.env.REACT_APP_USER}/repos`)
        .then((response) => setRepositories(response.data));
    }

    setInterval(() => {
      getRepositories().finally(() => setLoading(false));
    }, 2000);
  }, []);

  return { repositories, loading };
};
