import React, { Component } from 'react';
import axios from 'axios';
import { StyledTitle, Logout } from './title.style';

class Title extends Component {
  state={
    logged: '',
  }

  componentDidMount() {
    axios.get('/checkcookie')
      .then(({ data: { cookie } }) => {
        if (cookie) { this.setState({ logged: true }); } else { this.setState({ logged: false }); }
      });
  }

    logout = () => {
      const { history } = this.props;
      axios.get('/logout')
        .then(() => {
          console.log('dgsg');
          history.push('/login-form');
        });
    };

    render() {
      let LogoutButton;
      if (this.state.logged) {
        LogoutButton = <Logout type="button" onClick={this.logout}>logout</Logout>;
      }
      return (
        <div>
          <StyledTitle>eCommit </StyledTitle>
          {LogoutButton}
        </div>
      );
    }
}
export default Title;
