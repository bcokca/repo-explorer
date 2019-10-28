import React from "react";
import PropTypes from "prop-types";

class SortFilter extends React.Component {
  constructor(props) {
    super(props);
    const { filterValue } = this.props;
    this.state = { filterValue };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    const {filterOptions} = this.props;
    return (
      <div className="form-group">
        <label for="exampleFormControlSelect1">Select Filter</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={this.handleSubmit}
        >
          {filterOptions.map(option => {
            return <option value={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
    );
  }
}

SortFilter.propTypes = {
  filterValue: PropTypes.string,
  selectChangeHandler: PropTypes.func.isRequired,
  filterOptions: PropTypes.array
};

export default SortFilter;
