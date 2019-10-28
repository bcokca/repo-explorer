import React from "react";
import { useHistory } from "react-router-dom";

import Search from '../../components/Search';

const Main = function() {
  const history = useHistory();

  function handleClick(orgName) {
    if(orgName) {
      history.push(`/org/${orgName.toLowerCase()}`);
    }
  }

  return (
    <main role="main" className="inner cover text-center">
      <h1 className="cover-heading">Welcome!!!</h1>
      <p className="lead">
        Welcome to Repo Explorer. Type in your organizations name in order to
        find the related repos
      </p>
      <Search onClickHandler={handleClick} labelTitle={"Organization Name"} />
    </main>
  );
};

export default Main;
