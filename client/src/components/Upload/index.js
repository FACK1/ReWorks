import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Shared/Header';
import Title from '../Shared/Title';

class Upload extends Component {
  state = {
    details: null,
  };

  handleUploadFile = (event) => {
    const img = new FormData();
    img.append('file', event.target.files[0]);
    axios.post('/add-to-amazon', img)
      .then(({ data }) => {
        this.setState({ details: data });
        this.props.history.push({ pathname: '/get-details', details: this.state.details });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Header />
        <form>
          <input label="upload file" type="file" onChange={this.handleUploadFile} />
          <br />
          <image id="logo" src={this.state.loc} alt="uploaded photo" height="300" width="300" />
        </form>
      </React.Fragment>
    );
  }
}
export default Upload;
