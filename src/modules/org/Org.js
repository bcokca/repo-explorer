import React from "react";
import Repos from "./Repos";
import Search from "../../components/Search";
import Service from "./Service";

const INITIAL_PAGE = 1;
const INITIAL_REPOS = {items: [], total_count: 0}
class Organization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orgName: props.orgName, page: INITIAL_PAGE, searchKeyword: '', repos: INITIAL_REPOS};
    this.paginationClickHandler = this.paginationClickHandler.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    const { orgName } = this.props;
    Service.searchRepos(orgName, '', page).then(repos => {
      this.setState({ repos });
    });
  }

  paginationClickHandler(page) {
    const { orgName } = this.props;
    const { searchKeyword } = this.state;
    Service.searchRepos(orgName, searchKeyword, page).then(repos => {
      this.setState({ repos, page });
    });
  }

  searchClickHandler(searchKeyword) {
    this.setState({searchKeyword, page: INITIAL_PAGE});
    const { orgName } = this.props;
    Service.searchRepos(orgName, searchKeyword, INITIAL_PAGE).then(repos => {
      this.setState({ repos, page: INITIAL_PAGE });
    });
  }

  render() {
    const { repos, page, orgName } = this.state;
    return (
      <div className="content row">
        <div className="repoHeader col-12">
          <h1>{orgName}</h1>
        </div>
        <div className="container row">
          <div className="col-6">
            <Search
              onClickHandler={this.searchClickHandler}
              labelTitle={"Reposority Name"}
              hideBtn={true}
            />
          </div>
          <div className="col-6">Filters</div>
        </div>
        <div className="col-12">
          <Repos
            repos={repos.items}
            pagination={{
              paginationClickHandler: this.paginationClickHandler,
              page,
              total_count:repos.total_count,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Organization;
