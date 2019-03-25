import React from 'react';
import StyledHeader from './header.style';

const Header = props => (
  <StyledHeader>
    {props.title}
  </StyledHeader>
);
export default Header;
