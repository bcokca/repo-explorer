import React from "react";
import Commits from "./Commits";
import { useParams } from "react-router-dom";
function RepoPage() {
  const { orgName, repoName } = useParams();

  return (
    <div>
      <ul class="nav nav-tabs mb-3">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Commits
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Issues
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            PRs
          </a>
        </li>
      </ul>
      <Commits {...{ orgName, repoName }} />
    </div>
  );
}

export default RepoPage;
