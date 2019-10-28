import React from "react";
import PropTypes from "prop-types";

const SORT_FILTER_OPTIONS = [
  { value: "forks", text: "Popularity" },
  { value: "stars", text: "Most Starred" },
  { value: "update", text: "Most Updated" },
  { value: "help-wanted-issues", text: "Urgency (Needs Help)" }
];

class SortFilter extends React.Component {
  constructor(props) {
    super(props);
    const { sort } = this.props;
    this.state = { sort };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    sort: "forks"
  };

  handleSubmit(event) {
    event.preventDefault();
    const { sort } = this.state;
    const selectedItem = event.target.value;
    if (sort != selectedItem) {
      const { selectChangeHandler } = this.props;
      this.setState({ sort: selectedItem });
      selectChangeHandler(selectedItem);
    }
  }

  render() {
    const { sort } = this.state;

    return (
      <div className="form-group">
        <label for="exampleFormControlSelect1">Select Filter</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={this.handleSubmit}
        >
          {SORT_FILTER_OPTIONS.map(option => {
            return <option value={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
    );
  }
}

SortFilter.propTypes = {
  name: PropTypes.string,
  selectChangeHandler: PropTypes.func.isRequired
};

export default SortFilter;
