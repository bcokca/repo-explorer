import React from "react";
import Repos from "./Repos";
import Search from "../../components/Search";
import Service from "../shared/Service";
import Filter from "../../components/Filter";

const INITIAL_PAGE = 1;
const INITIAL_REPOS = { items: [], total_count: 0 };
const SORT_FILTER_OPTIONS = [
  { value: "forks", text: "Most Popular" },
  { value: "stars", text: "Most Starred" },
  { value: "update", text: "Most Updated" },
  { value: "help-wanted-issues", text: "Most Urgent" }
];

class Organization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: props.orgName,
      page: INITIAL_PAGE,
      searchKeyword: "",
      repos: INITIAL_REPOS,
      sort: "forks"
    };
    this.paginationClickHandler = this.paginationClickHandler.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
    this.selectChangeHandler = this.selectChangeHandler.bind(this);
  }

  componentDidMount() {
    const { page, sort, searchKeyword } = this.state;
    const { orgName } = this.props;
    Service.searchRepos({ orgName, searchKeyword, page, sort }).then(repos => {
      this.setState({ repos });
    });
  }

  paginationClickHandler(page) {
    const { orgName } = this.props;
    const { searchKeyword, sort } = this.state;
    Service.searchRepos({ orgName, searchKeyword, page, sort }).then(repos => {
      this.setState({ repos, page });
    });
  }

  searchClickHandler(searchKeyword) {
    const { orgName } = this.props;
    const { sort } = this.state;
    Service.searchRepos({
      orgName,
      searchKeyword,
      page: INITIAL_PAGE,
      sort
    }).then(repos => {
      this.setState({ repos, page: INITIAL_PAGE, searchKeyword });
    });
  }

  selectChangeHandler(sort) {
    const { orgName } = this.props;
    const { searchKeyword } = this.state;
    Service.searchRepos({
      orgName,
      searchKeyword,
      page: INITIAL_PAGE,
      sort
    }).then(repos => {
      this.setState({ repos, page: INITIAL_PAGE });
    });
  }

  render() {
    const { repos, page, orgName, sort } = this.state;
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
          <div className="col-6">
            <Filter
              filterValue={sort}
              filterOptions={SORT_FILTER_OPTIONS}
              selectChangeHandler={this.selectChangeHandler}
            />
          </div>
        </div>
        <div className="col-12">
          <Repos
            repos={repos.items}
            pagination={{
              paginationClickHandler: this.paginationClickHandler,
              page,
              total_count: repos.total_count
            }}
          />
        </div>
      </div>
    );
  }
}
export default Organization;
