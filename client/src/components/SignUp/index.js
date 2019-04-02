import React, { Component } from 'react';
import axios from 'axios';
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
  StyledLogin,
  StyledP,
  StyledText,
  ErrorMessage,
} from './signup.style';

class signUp extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    usernameError: '',
    passwordError: '',
    isErrorUsername: false,
    isErrorPassword: false,
  };


  validate = () => {
    let isError = false;
    this.setState({ isErrorUsername: false, isErrorPassword: false });

    const characters = ['+', '/', '*', '$', '#', '@', '!', '^', '&', '(', ')', '?', '>', '<', '.'];
    const errors = {
      usernameError: '',
      passwordError: '',
      isErrorUsername: false,
      isErrorPassword: false,
    };
    for (let i = 0; i < characters.length; i++) {
      if (this.state.username.includes(characters[i])) {
        isError = true;
        errors.isErrorUsername = true;
        errors.usernameError = 'Username could contains letter,number and \'-\',\'_\' just';
      } else if (this.state.username < 1) {
        isError = true;
        errors.isErrorUsername = true;
        errors.usernameError = 'Username is required';
      }
    }
    if (this.state.password !== this.state.confirmPassword) {
      isError = true;
      errors.isErrorPassword = true;
      errors.passwordError = 'The password and confirm password not match';
    } else
    if (this.state.password.length < 6) {
      isError = true;
      errors.isErrorPassword = true;
      errors.passwordError = 'Password needs to be at least 6 characters';
    }

    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  signup = () => {
    const err = this.validate();
    if (!err) {
      const { history } = this.props;
      const inputs = {
        username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      };
      axios.post('/signup', inputs).then(({ data }) => {
        if (data.success) {
          history.push('/login-form');
        } else {
          this.setState({ usernameError: data.error, isErrorUsername: true });
        }
      });
    }
  };

  goLogin = () => {
    const { history } = this.props;
    history.push('/login-form');
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <Header title="Sign Up" />
        <StyledForm>
          <StyledLabel> Username* </StyledLabel>
          <StyledInput
            StyleError={this.state.isErrorUsername}
            {...this.props}
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({
              username: e.target.value,
            })
            }
          />
          <ErrorMessage>{this.state.usernameError}</ErrorMessage>
          <StyledLabel> Password* </StyledLabel>
          <StyledInput
            StyleError={this.state.isErrorPassword}
            {...this.props}
            type="password"
            name="password"
            placeholder="**************"
            value={this.state.password}
            onChange={e => this.setState({
              password: e.target.value,
            })
            }
          />
          <StyledLabel> Confirm password* </StyledLabel>
          <StyledInput
            StyleError={this.state.isErrorPassword}
            {...this.props}
            type="password"
            name="confirmPassword"
            placeholder="**************"
            value={this.state.confirmPassword}
            onChange={e => this.setState({
              confirmPassword: e.target.value,
            })
            }
          />
          <ErrorMessage>{this.state.passwordError}</ErrorMessage>
          <StyledP>
            <StyledText>Been here before? </StyledText>
            <StyledLogin onClick={this.goLogin}> Login</StyledLogin>
          </StyledP>
        </StyledForm>

        <StyledBottom>
          <Button />
          <GButton title="SIGN UP" onClick={this.signup} />
          <Footer />
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default signUp;
