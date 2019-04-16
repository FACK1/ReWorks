import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Shared/Header';
import Title from '../Shared/Title';
import uploadIcon from './uploadIcon.png';
import {
  ImgIcon, Container, TakeGoodPhoto, Instructions, FooterStyle,
} from './upload.style';
import Footer from '../Shared/Footer';
import Spinner from '../Shared/Spinner';

class Upload extends Component {
  state = {
    details: null,
    uploadingFlag: false,
  };

  handleUploadFile = (event) => {
    const img = new FormData();
    img.append('file', event.target.files[0]);
    this.setState({ uploadingFlag: true });
    axios.post('/add-to-amazon', img).then(({ data }) => {
      this.setState({ details: data });
      this.props.history.push({ pathname: '/get-details', details: this.state.details });
    }).catch(() => {
      const { history } = this.props;
      history.push('/error');
    });
  };

  render() {
    return (
      <React.Fragment>
        <Title {...this.props} />
        <Header title="Upload your photo" />
        <Instructions>
          <TakeGoodPhoto>
            After you add your photo e-commit's software will determine some key item
            characteristics for you to verify.
          </TakeGoodPhoto>
          <TakeGoodPhoto>
            Please take your image front on with as much natural light & limited shadows.
          </TakeGoodPhoto>
        </Instructions>
        {!this.state.uploadingFlag && (
          <Container>
            <input
              id="input-img"
              label="upload file"
              type="file"
              onChange={this.handleUploadFile}
              accept="image/*"
              hidden
            />
            <label htmlFor="input-img">
              <ImgIcon src={uploadIcon} />
            </label>
          </Container>
        )}
        {this.state.uploadingFlag && <Spinner />}
        <FooterStyle>
          <Footer />
        </FooterStyle>
      </React.Fragment>
    );
  }
}
export default Upload;
