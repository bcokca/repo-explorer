import React from "react";
import "./Cards.css";

function Card({ name, description, commitsClickHandler, language, license }) {
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
      </div>
    </div>
  );
}

export default Card;
