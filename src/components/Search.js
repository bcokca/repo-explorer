import React from "react";
import PropTypes from "prop-types";
/**
 * TODO: Missing features:
 * Input validators
 * Option to trigger the handler with `debounce`
 */
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: "" };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    hideSearchBtn: false,
    labelTitle: "Search"
  };

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
    const { labelTitle, hideSearchBtn } = this.props;

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

        {hideSearchBtn ? null : (
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
  hideSearchBtn: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired
};

export default Search;
