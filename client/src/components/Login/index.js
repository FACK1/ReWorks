import React, { Component } from 'react';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';


import {
  StyledForm,
  StyledBottom,
  StyledLabel,
  StyledInput,
  StyledSignUp,
  StyledP,
  StyledText,
}
  from './login.style';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <Header title="Login to save your data!" />
        <StyledForm>

          <StyledLabel> Username* </StyledLabel>

          <StyledInput type="text" name="username" placeholder="username" />

          <StyledLabel> Password* </StyledLabel>

          <StyledInput type="password" name="password" placeholder="password" />
          <StyledP>
            <StyledText>first time around here? </StyledText>
            <StyledSignUp> Sign up</StyledSignUp>
          </StyledP>
        </StyledForm>
        <StyledBottom>
          <Button />
          <GButton />
          <Footer />
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default Login;
