import React from 'react';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';

function GetDetails() {
  return (
    <React.Fragment>
      <Title />
      <Header />
      <Form />
      <Button />
      <GButton />
      <Footer />
    </React.Fragment>
  );
}
export default GetDetails;
