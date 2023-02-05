import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./loading.scss";

export const Loading = () => {
  return (
    <h1 className="text">
      <AiOutlineLoading3Quarters size={20} className="load" />
      Carregando repositórios...
    </h1>
  );
};
