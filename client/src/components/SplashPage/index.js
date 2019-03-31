import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';

import {
  AppDescription,
  FatherContainer,
  Span,
  GButton,
} from './splashpage.style';


class Splash extends Component {
  componentDidMount() {
    axios.get('/checkcookie')
      .then(({ data: { cookie } }) => {
        if (cookie) {
          const { history } = this.props;
          history.push('/item-list');
        }
      });
  }

  clickedStart=() => {
    const { history } = this.props;
    history.push('/upload-photo');
  }

  render() {
    return (
      <React.Fragment>
        <FatherContainer>
          <Title />
          <AppDescription>
        Ecommit makes it easy for you to trade your preloved items online.
        Simply upload images of your items & allow our app to generate the data
        needed to trade on.
            <Span>Start by uploading a photo of your item.</Span>
          </AppDescription>
          <GButton action="START" onClick={this.clickedStart}>
        START
          </GButton>
        </FatherContainer>
      </React.Fragment>
    );
  }
}
export default Splash;
