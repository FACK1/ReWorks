import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import uploadIcon from './uploadIcon.png';

class Upload extends Component {
  state = {
    loc: null,
  };
  handleUploadFile = event => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('/add-to-amazon', data).then(response => {
      this.setState({ loc: `${response.data.Location}` });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Header />
        <form>
          <input
            id="input-img"
            label="upload file"
            type="file"
            onChange={this.handleUploadFile}
            hidden
          />
          <label for="input-img">
            <img src={uploadIcon} />
          </label>
          <br />
          <img id="logo" src={this.state.loc} alt="uploaded photo" height="300" width="300" />
        </form>
      </React.Fragment>
    );
  }
}
export default Upload;
