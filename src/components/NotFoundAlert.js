import React from "react";

function NotFoundAlert({orgName}) {
  return (
    <div className="alert alert-dark" role="alert">
      No repositories found for {orgName} organization
    </div>
  );
}

export default NotFoundAlert;
