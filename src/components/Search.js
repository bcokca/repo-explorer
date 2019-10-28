import React from "react";
import PropTypes from "prop-types";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: "" };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    hideBtn: false,
    labelTitle: "Search"
  };

  //TODO: we also need validators such as space and stuff
  updateInputValue(event) {
    this.setState({
      searchKeyword: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClickHandler } = this.props;
    const { searchKeyword } = this.state;
    onClickHandler(searchKeyword);
  }

  render() {
    const { searchKeyword } = this.state;
    const { labelTitle, hideBtn } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>{labelTitle}</label>

          <input
            type="text"
            className="form-control"
            onChange={this.updateInputValue}
            value={this.state.inputValue}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search"
          />
        </div>

        {hideBtn ? null : (
          <button
            disabled={searchKeyword === ""}
            type="submit"
            className="btn btn-primary"
          >
            Search
          </button>
        )}
      </form>
    );
  }
}

Search.propTypes = {
  labelTitle: PropTypes.string,
  hideBtn: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired
};

export default Search;
