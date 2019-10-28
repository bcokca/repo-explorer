import React from "react";

function NotFoundAlert({ message }) {
  return (
    <div className="alert alert-dark" role="alert">
      {message}
    </div>
  );
}

export default NotFoundAlert;
