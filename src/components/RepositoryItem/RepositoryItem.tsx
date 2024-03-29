import React from "react";

import { IRespositoryItem } from "interfaces/repositoryItem";

export const RepositoryItem = ({ repository }: IRespositoryItem) => {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank" rel="noreferrer">
        Acessar repositório
      </a>
    </li>
  );
};
