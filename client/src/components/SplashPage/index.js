import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';

import {
  AppDescription,
  FatherContainer,
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
            <p> e-commit is a new way to sell / trade your unwanted clothes. </p>
            <p> The app automatically generates information about your garments & creates a data base you can use to auto link to marketplaces or pass on (e.g. to charity).</p>
            <p> Even a modest amount of data can save the earth - Add as much as you can!</p>
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
