import React, { Component } from 'react';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';

class GetDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const image = this.props.location.img;
    return (
      <React.Fragment>
        <Title />
        <Header title="Get your details" />
        <Form image={image} />
        <Button />
        <GButton />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
