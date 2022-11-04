import React from "react";

interface RespositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepositoryItem = ({ repository }: RespositoryItemProps) => {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>Acessar repositório</a>
    </li>
  );
};
