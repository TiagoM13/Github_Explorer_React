import React, { useState, useEffect } from "react";
import { ImGithub } from "react-icons/im";

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
      <div className="text-center">
        <ImGithub size={30} />
        <h1>Github Explorer</h1>
      </div>
      <h2>Lista de Repositórios</h2>

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
