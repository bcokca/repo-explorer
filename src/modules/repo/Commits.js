import React from "react";

import CommitCard from "./CommitCard";
import Service from "../shared/Service";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";

class Commits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commits: [], page: 1, loading: false };
    this.paginationClickHandler = this.paginationClickHandler.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    const { orgName, repoName } = this.props;
    this.setState({loading: true})
    Service.fetchCommits({ page, orgName, repoName }).then(commits => {
      this.setState({ commits, loading: false });
    });
  }

  paginationClickHandler(page) {
    const { orgName, repoName } = this.props;
    this.setState({loading: true})
    Service.fetchCommits({ page, orgName, repoName }).then(commits => {
      this.setState({ commits, page, loading: false });
    });
  }

  render() {
    const { commits, page, loading } = this.state;
    return (
      <div className="content">
        <div className="list-group">
          {!loading && commits && commits.length
            ? commits.map(commitObj => {
                return <CommitCard commitObj={commitObj} key={commitObj.sha} />;
              })
            : null}
          {!loading && commits && commits.length ? (
            <Pagination
              paginationClickHandler={this.paginationClickHandler}
              page={page}
            />
          ) : null}
          {loading ? <Spinner /> : null}
        </div>
      </div>
    );
  }
}

export default Commits;
