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
} from './login.style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  login = () => {
    const { history } = this.props;
    const inputs = { username: this.state.username, password: this.state.password };
    axios.post('/login', inputs).then(({ data }) => {
      if (data.success) {
        history.push('/items-page');
      } else {
        history.push('/error');
      }
    });
  };

goSignUp = () => {
  const { history } = this.props;
  history.push('/signup-form');
}

render() {
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
          value={this.state.username}
          onChange={e => this.setState({
            username: e.target.value,
          })
            }
        />
        <StyledLabel> Password* </StyledLabel>
        <StyledInput
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={e => this.setState({
            password: e.target.value,
          })
            }
        />

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
