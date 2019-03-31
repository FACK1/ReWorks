import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import StyledButton from './button.style';


class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledButton
        type="button"
        onClick={this.props.history.goBack}
      >
      BACK
      </StyledButton>
    );
  }
}
export default withRouter(Button);
