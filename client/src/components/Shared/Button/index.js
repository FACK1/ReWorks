import React from 'react';
import { withRouter } from 'react-router-dom';
import StyledButton from './button.style';


const Button = (props) => {
  if (props.title === 'GIVE YOUR FEEDBACK') {
    return (
      <StyledButton
        type="button"
        onClick={props.onclick}
      >
        {props.title}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      type="button"
      onClick={props.history.goBack}
    >
      BACK
    </StyledButton>
  );
};
export default withRouter(Button);
