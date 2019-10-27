import React from "react";
import Repos from "./Repos";
import appConfig from "../../config";

//TODO: make sure the app config works
const INITIAL_PAGE = 1;
const BASE_URL = "https://api.github.com"; //TODO: move this to react context
class Organization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orgName: props.orgName, page: INITIAL_PAGE };
    this.paginationClickHandler = this.paginationClickHandler.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    this.fetchRepos(page).then(repositories => {
      this.setState({ repositories });
    });
  }

  fetchRepos(page) {
    const { orgName } = this.state;
    const url = `${BASE_URL}/orgs/${orgName}/repos?page=${page}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }

  paginationClickHandler(page) {
    this.fetchRepos(page).then(repositories => {
      this.setState({ repositories, page });
    });
  }

  render() {
    const { repositories, page, orgName } = this.state;
    return (
      <div className="content">
        <div className="repoHeader"><strong>{orgName}</strong> repositories </div>
        <div>SEARCH</div>
        <div>Sort - Ranking</div>
        <Repos
          repos={repositories}
          pagination={{
            paginationClickHandler: this.paginationClickHandler,
            page
          }}
        />
      </div>
    );
  }
}

export default Organization;
