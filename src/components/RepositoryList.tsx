import React, { useState, useEffect } from "react";

import { RepositoryItem } from "components/RepositoryItem";

import { IRepository } from "interfaces/repository";

import "styles/repositories.scss";

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/TiagoM13/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
};
