import React from "react";

function Card({commitObj}) {
  const {html_url, sha} = commitObj;
  const commit = commitObj.commit;
  const { author, message } = commit;
  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 font-weight-600">{message}</p>
        <a href={html_url} target="blank">{sha.slice(sha.length - 7)}</a>
      </div>
      <p className="mb-1"></p>
      <small><strong>{author.name}</strong> committed on {author.date}</small>
    </div>
  );
}

export default Card;
