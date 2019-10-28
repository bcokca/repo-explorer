import React from "react";

function Card({ commitObj }) {
  const { html_url, sha } = commitObj;
  const commit = commitObj.commit;
  const { author, message } = commit;
  const date = new Date(author.date);
  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 fw-600">
          {message && message.length > 60
            ? `${message.substring(0, 75)}...`
            : message}
        </p>
        <a href={html_url} target="blank">
          {sha.slice(sha.length - 7)}
        </a>
      </div>
      <p className="mb-1"></p>
      <small>
        {/* TODO: relative date filter */}
        <strong>{author.name}</strong> committed on {date.toLocaleDateString()}{" "}
        at {date.toLocaleTimeString()}
      </small>
    </div>
  );
}

export default Card;
