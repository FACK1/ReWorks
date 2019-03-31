import React from 'react';
import ReactLoading from 'react-loading';
import LoaderStyle from './loader.style';

const Loader = () => (
  <LoaderStyle>
    <ReactLoading type="bubbles" color="#1ed390" width="100px" />
  </LoaderStyle>
);

export default Loader;
