import { useEffect, useState } from "react";

import { RequestUser } from "constants/constants";

import { IRepository } from "interfaces/repository";

import { api } from "services/api";

export const useRespositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    async function getRepositories() {
      await api
        .get(RequestUser)
        .then((response) => setRepositories(response.data));
    }

    getRepositories();
  }, []);

  return { repositories };
};
