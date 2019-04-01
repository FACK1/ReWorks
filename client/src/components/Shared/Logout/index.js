import React, { Component } from 'react';
import axios from 'axios';
import LogoutB from './logout.style';

class Logout extends Component {
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
      });
  }

    clicklogout = () => {
      const { history } = this.props;
      axios.get('/logout')
        .then(() => {
          history.push('/login-form');
        });
    };

    render() {
      let LogoutButton;
      if (this.state.logged) {
        LogoutButton = <LogoutB type="button" onClick={this.clicklogout}>logout</LogoutB>;
      }
      return (
        <div>
          {LogoutButton}
        </div>
      );
    }
}
export default Logout;
