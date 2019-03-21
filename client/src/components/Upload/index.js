import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

class FileUpload extends Component {

  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('/add-to-amazon', data).then((response) => {
      console.log(response);
    });
  }

  render () {
    return (
<React.Fragment>
  <Header/>
  <form onSubmit={this.submitFile}>
    <input label='upload file' type='file' onChange={this.handleUploadFile} />
    <br/>
    <img id="logo" src={this.state.loc} alt="Smiley face" height="300" width="300"/>
  </form>
  <Footer/>
<React.Fragment/>
    );
  }
}
export default Upload;
