import React from "react";
import Commits from "./Commits";
import { useParams } from "react-router-dom";
function RepoPage() {
  const { orgName, repoName } = useParams();

  return (
    <div>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Commits
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Issues
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            PRs
          </a>
        </li>
      </ul>
      <Commits {...{ orgName, repoName }} />
    </div>
  );
}

export default RepoPage;
