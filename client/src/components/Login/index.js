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
  StyledSignUp,
  StyledP,
  StyledText,
  ErrorMessage,
} from './login.style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      isErrorUsername: false,
      isErrorPassword: false,
    };
  }

  validate = () => {
    let isError = false;
    this.setState({ isErrorUsername: false, isErrorPassword: false });

    const errors = {
      usernameError: '',
      passwordError: '',
      isErrorUsername: false,
      isErrorPassword: false,
    };
    if (this.state.username < 1) {
      isError = true;
      errors.isErrorUsername = true;
      errors.usernameError = 'Please enter your username.';
    }
    if (this.state.password < 1) {
      isError = true;
      errors.isErrorPassword = true;
      errors.passwordError = 'Please enter your password.';
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  login = () => {
    const err = this.validate();
    if (!err) {
      const { history } = this.props;
      const inputs = { username: this.state.username, password: this.state.password };
      const detailsInputs = this.props.location.data;
      axios.post('/login', inputs).then(({ data }) => {
        if (data.success) {
          if (detailsInputs) {
            axios.post('/add-item', detailsInputs).then((addData) => {
              if (addData.data.success) {
                history.push('/item-list');
              } else {
                history.push('/error');
              }
            });
          }
        } else {
          this.setState({ passwordError: 'Username or password is incorrect.', isErrorUsername: true, isErrorPassword: true });
        }
      });
    }
  };

goSignUp = () => {
  const { history } = this.props;
  history.push({ pathname: '/signup-form', data: this.props.location.data });
}

render() {
  return (
    <React.Fragment>
      <Title />
      <Header title="Login to save your data!" />
      <StyledForm>
        <StyledLabel> Username* </StyledLabel>
        <StyledInput
          StyleError={this.state.isErrorUsername}
          {...this.props}
          type="text"
          name="username"
          placeholder="username"
          errorText={this.state.usernameError}
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
          placeholder="password"
          errorText={this.state.passwordError}
          value={this.state.password}
          onChange={e => this.setState({
            password: e.target.value,
          })
            }
        />
        <ErrorMessage>{this.state.passwordError}</ErrorMessage>

        <StyledP>
          <StyledText>First time around here? </StyledText>
          <StyledSignUp onClick={this.goSignUp}> Sign up</StyledSignUp>
        </StyledP>
      </StyledForm>

      <StyledBottom>
        <Button />
        <GButton title="LOGIN" onClick={this.login} />
        <Footer />
      </StyledBottom>
    </React.Fragment>
  );
}
}

export default Login;
