import React from 'react';
import ReactLoading from 'react-loading';
import SpinnerStyle from './spinner.style';

const Spinner = () => (
  <SpinnerStyle>
    <ReactLoading type="bubbles" color="#1ed390" width="100px" />
  </SpinnerStyle>
);

export default Spinner;
