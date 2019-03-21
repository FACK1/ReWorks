import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

class Upload extends Component {
  handleUploadFile = event => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('/add-to-amazon', data).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <form>
          <input label="upload file" type="file" onChange={this.handleUploadFile} />
        </form>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Upload;
