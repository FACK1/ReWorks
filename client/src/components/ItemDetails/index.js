import React, { Component } from 'react';
import Title from '../Shared/Title';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import deleteIcon from './garbage.png';

import { ImgDiv } from './itemdetails.style';

class GetDetails extends Component {
  state = { itemDetails: this.props.location.itemDetails };

  goBack = () => {
    const { history } = this.props;
    history.push('/item-list');
  };

  render() {
    const { url } = this.state.itemDetails;

    return (
      <React.Fragment>
        <Title />
        <ImgDiv>
          <img src={deleteIcon} alt="delete icon" />
        </ImgDiv>
        <Form image={url} />
        <Button onClick={this.goBack} />
        <GButton title="Save" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
