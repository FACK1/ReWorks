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
} from './signup.style';

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  signup = () => {
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
        history.push('/error');
      }
    });
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
            placeholder="**************"
            value={this.state.password}
            onChange={e => this.setState({
              password: e.target.value,
            })
            }
          />
          <StyledLabel> Confirm password* </StyledLabel>
          <StyledInput
            type="password"
            name="confirmPassword"
            placeholder="**************"
            value={this.state.confirmPassword}
            onChange={e => this.setState({
              confirmPassword: e.target.value,
            })
            }
          />
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
