import React, { Component } from 'react';
import axios from 'axios';
import { StyledTitle, LogoutB } from './title.style';

class Title extends Component {
  constructor(props) {
    super(props);
  }

  state={
    logged: '',
  }

  componentDidMount() {
    axios.get('/checkcookie')
      .then(({ data: { cookie } }) => {
        if (cookie) { this.setState({ logged: true }); } else { this.setState({ logged: false }); }
      }).catch(() => {
        const { history } = this.props;
        history.push('/error');
      });
  }

    clicklogout = () => {
      const { history } = this.props;
      axios.get('/logout')
        .then(() => {
          history.push('/login-form');
        }).catch(() => {
          history.push('/error');
        });
    };


    render() {
      let LogoutButton;
      if (this.state.logged) {
        LogoutButton = <LogoutB type="button" onClick={this.clicklogout}>Log out</LogoutB>;
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
