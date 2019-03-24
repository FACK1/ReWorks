import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from '../Shared/Header';

class Upload extends Component {
  state = {
    loc: null,
  };
  handleUploadFile = event => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('/add-to-amazon', data).then(response => {
      console.log(response);
      this.setState({ loc: `${response.data.Location}` });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <form>
          <input label="upload file" type="file" onChange={this.handleUploadFile} />
          <br />
          <img id="logo" src={this.state.loc} alt="uploaded photo" height="300" width="300" />
        </form>
      </React.Fragment>
    );
  }
}
export default Upload;
