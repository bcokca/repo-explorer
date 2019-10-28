import React from "react";
import CommitCard from "./CommitCard";
// import Pagination from "../../components/Pagination";
import Service from "../shared/Service";

class Commits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commits: [], page: 1 };
    this.paginationClickHandler = this.paginationClickHandler.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    const { orgName, repoName } = this.props;
    Service.fetchCommits({ page, orgName, repoName }).then(commits => {
      this.setState({ commits });
    });
  }

  paginationClickHandler(page) {
    const { orgName, repoName } = this.props;
    Service.fetchCommits({ page, orgName, repoName }).then(commits => {
      this.setState({ commits, page });
    });
    //TODO: scroll up
  }

  render() {
    const { commits, page } = this.state;
    return (
      <div className="content">
        <div className="list-group">
          {commits && commits.length
            ? commits.map(commitObj => {
                return <CommitCard commitObj={commitObj} key={commitObj.sha} />;
              })
            : null}
        </div>
        <div>
          {/* <Pagination
            paginationClickHandler={this.paginationClickHandler}
            page={page}
          /> */}
        </div>
      </div>
    );
  }
}

export default Commits;
