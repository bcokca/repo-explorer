import React from "react";

function Spinner() {
  return (
    <div className="text-center m-1">
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
