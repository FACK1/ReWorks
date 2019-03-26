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
} from './login.style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
    console.log(this.state.inputValue);
  };

  render() {
    console.log(this.state.inputValue);
    return (
      <React.Fragment>
        <Title />

        <Header title="Login to save your data!" />

        <StyledForm>
          <StyledLabel> Username* </StyledLabel>
          <StyledInput
            type="text"
            name="username"
            placeholder="username"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
          />
          <StyledLabel> Password* </StyledLabel>
          <StyledInput
            type="password"
            name="password"
            placeholder="password"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
          />

          <StyledP>
            <StyledText>First time around here? </StyledText>
            <StyledSignUp> Sign up</StyledSignUp>
          </StyledP>
        </StyledForm>

        <StyledBottom>
          <Button />
          <GButton title="Login" />
          <Footer />
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default Login;
