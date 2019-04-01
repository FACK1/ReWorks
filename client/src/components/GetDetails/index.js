import React, { Component } from "react";
import axios from "axios";
import Title from "../Shared/Title";
import Header from "../Shared/Header";
import Form from "../Shared/Form";
import GButton from "../Shared/GreenButton";
import Button from "../Shared/Button";
import Footer from "../Shared/Footer";

class GetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url:
        "https://www.childrensplace.com/wcsstore/GlobalSAS/images/tcp/department/US/021919/US-DP-TG-021919-SPRING-DEPT_06.jpg"
    };
  }

  continue = () => {
    axios.get("/checkcookie").then(({ data: { cookie, logged } }) => {
      const { history } = this.props;
      if (cookie) {
        history.push({ pathname: "/item-list", logged });
      } else {
        history.push("/login-form");
      }
    });
  };

  render() {
    const { image_url } = this.state;
    return (
      <React.Fragment>
        <Title />
        <Header title="Get your details" />
        <Form image={image_url} />
        <Button />
        <GButton title="CONTINUE" onClick={this.continue} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
