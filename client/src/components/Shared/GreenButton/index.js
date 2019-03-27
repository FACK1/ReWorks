import React from 'react';
import StyledButton from './greenbutton.style';

const GButton = props => (
  <StyledButton onClick={props.onClick} type="button">
    {props.title}
  </StyledButton>
);
export default GButton;
