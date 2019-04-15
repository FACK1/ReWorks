import React, { Component, Fragment } from "react";

import Select from "react-select";
import { colourOptions } from "../../data";
// import { label } from '../styled-components';

export default class SingleSelect extends Component {
  state = {
    selected_option: null
  };

  handleChange = selected => {
    this.setState({ selected_option: selected });
  };

  render() {
    console.log("how its going", this.state.selected_option);
    return (
      <Fragment>
        <Select
          value={this.state.selected_option}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          isDisabled={false}
          isLoading={false}
          isClearable
          isRtl={false}
          isSearchable
          name="color"
          options={colourOptions}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}
