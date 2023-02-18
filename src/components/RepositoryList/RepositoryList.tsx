import React from "react";
import { FaListUl } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

import { Loading } from "components/Loading/Loading";
import { RepositoryItem } from "components/RepositoryItem/RepositoryItem";

import { useRespositories } from "hooks/repositories";

import "styles/repositories.scss";

export const RepositoryList = () => {
  const { repositories, loading } = useRespositories();

  return (
    <section className="repository-list">
      <div className="text-center">
        <ImGithub size={30} />
        <h1>Github Explorer</h1>
      </div>
      <div className="title-list">
        <FaListUl size={22} />
        <h2>Lista de Repositórios</h2>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ul>
          {repositories.map((repository) => {
            return (
              <RepositoryItem key={repository.name} repository={repository} />
            );
          })}
        </ul>
      )}
    </section>
  );
};
