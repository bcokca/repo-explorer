import React from "react";
import Card from "./Card";

import { useHistory, useParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import NotFoundAlert from "../../components/NotFoundAlert";

function Repositories({ repos, pagination }) {
  const history = useHistory();
  const { orgName } = useParams();

  function commitsClickHandler(name) {
    const url = `/org/${orgName}/repos/${name}/commits`;
    history.push(url);
  }

  return (
    <div>
      {repos && repos.length ? (
        repos.map(repo => {
          const params = {...repo, commitsClickHandler, key: repo.id}
          return (
            <Card {...params} />
          );
        })
      ) : (
        <NotFoundAlert orgName={orgName} />
      )}
      {repos && repos.length ? <Pagination {...pagination} /> : null}
    </div>
  );
}

export default Repositories;
