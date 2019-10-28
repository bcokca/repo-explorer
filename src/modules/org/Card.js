import React from "react";
import "./Cards.css";

function Card({
  name,
  description,
  commitsClickHandler,
  language,
  license,
  forks_count,
  stargazers_count
}) {
  return (
    <div className="card">
      <div className="card-body">
        <a className="card-title" onClick={() => commitsClickHandler(name)}>
          {name}
        </a>
        <p className="card-text">{description}</p>
        <span className="badge badge-pill badge-dark">{language}</span>
        {license ? (
          <span className="badge badge-pill badge-light">{license.name}</span>
        ) : null}
        <span className="badge">Forks: </span>
        <span className="badge badge-secondary">{forks_count}</span>
        <span className="badge">Stars: </span>
        <span className="badge badge-warning">{stargazers_count}</span>
      </div>
    </div>
  );
}

export default Card;
