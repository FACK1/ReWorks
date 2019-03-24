import React from 'react';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';

function GetDetails() {
  return (
    <React.Fragment>
      <Title />
      <Header />
      <Form />
      <Button />
      <GButton />
    </React.Fragment>
  );
}
export default GetDetails;
