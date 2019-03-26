import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Shared/Header';
import Title from '../Shared/Title';
import uploadIcon from './uploadIcon.png';
import {
  ImgIcon, Container, TakeGoodPhoto, Instructions,
} from './upload.style';
import Footer from '../Shared/Footer';

class Upload extends Component {
  state = {
    details: null,
  };

  handleUploadFile = (event) => {
    const img = new FormData();
    img.append('file', event.target.files[0]);
    axios.post('/add-to-amazon', img).then(({ data }) => {
      this.setState({ details: data });
      this.props.history.push({ pathname: '/get-details', details: this.state.details });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Header title="Upload your photo"/>
        <Instructions>
          <TakeGoodPhoto>
            After you add your photo e-commit's software will determine some key item
            characteristics for you to verify.
          </TakeGoodPhoto>
          <TakeGoodPhoto>
            Please take your image front on with as much natural light & limited shadows.
          </TakeGoodPhoto>
        </Instructions>
        <Container>
          <input
            id="input-img"
            label="upload file"
            type="file"
            onChange={this.handleUploadFile}
            hidden
          />
          <label htmlFor="input-img">
            <ImgIcon src={uploadIcon} />
          </label>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Upload;
