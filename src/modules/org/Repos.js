import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Pagination from "../../components/Pagination";
import NotFoundAlert from "../../components/NotFoundAlert";
import Card from "./Card";

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
        <NotFoundAlert message={`No repositories found for {orgName} organization`} />
      )}
      {repos && repos.length ? <Pagination {...pagination} /> : null}
    </div>
  );
}

export default Repositories;
