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
  from './signup.style';

class signUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Title />

        <Header title="Sign up" />

        <StyledForm>

          <StyledLabel> Username* </StyledLabel>
          <StyledInput type="text" name="username" placeholder="username" />
          <StyledLabel> Password* </StyledLabel>
          <StyledInput type="password" name="password" placeholder="password" />
          <StyledLabel> Confirm Password* </StyledLabel>
          <StyledInput type="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />

          <StyledP>
            <StyledText>Been here before? </StyledText>
            <StyledSignUp>Login</StyledSignUp>
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

export default signUp;
