import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import uploadIcon from './uploadIcon.png';
import { ImgIcon } from './upload.style';
import { Container } from './upload.style';
import { TakeGoodPhoto } from './upload.style';
import { Instructions } from './upload.style';
import Footer from '../Shared/Footer';

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
          <label for="input-img">
            <ImgIcon src={uploadIcon} />
          </label>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Upload;
