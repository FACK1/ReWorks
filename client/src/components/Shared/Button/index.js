import React from 'react';
import { withRouter } from 'react-router-dom';
import StyledButton from './button.style';


const Button = props => (
  <StyledButton
    type="button"
    onClick={props.history.goBack}
  >
      BACK
  </StyledButton>
);

export default withRouter(Button);
