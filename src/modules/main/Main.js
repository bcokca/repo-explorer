import React from "react";
import { useHistory } from "react-router-dom";

const Main = function() {
  const history = useHistory();

  function handleClick() {
    history.push("/org/netflix");
  }

  return (
    <main role="main" class="inner cover text-center">
      <h1 class="cover-heading">Welcome!!!</h1>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <p class="lead">
        Welcome to Repo Explorer. Type in your organizations name in order to
        find the related repos
      </p>
      <button type="button" class="btn btn-secondary" onClick={handleClick}>
        Search
      </button>
    </main>
  );
};

export default Main;
