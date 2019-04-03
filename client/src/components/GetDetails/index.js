import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import data from '../../data/data.json';

class GetDetails extends Component {
  state = {
    isOpen: false,
    selectedCat: null,
    selected_itemType: '',
    selected_colors: '',
    selected_brands: '',
    selected_condition: '',
    selected_labelSize: '',
    selected_age: '',
    itemType: data.itemType,
    colors: data.colors,
    brands: data.brands,
    condition: data.condition,
    labelSize: data.labelSize,
    age: data.age,
  }

  componentDidMount() {
    const { apparel, colors } = this.props.location.details;
    this.setState({
      selected_brands: this.state.brands[0],
      selected_condition: this.state.condition[0],
      selected_labelSize: this.state.labelSize[0],
      selected_age: this.state.age[0],
    });

    if (apparel || colors) {
      const colours = colors.data.map(ele => ele.name);
      this.setState({
        colors: [...colours, ...this.state.colors],
        selected_colors: colors.data[0].name,
      });

      if (apparel && apparel.data.length > 0) {
        const outfit = apparel.data.map(ele => ele.tag_name);
        this.setState({
          itemType: [...outfit, ...this.state.itemType],
          selected_itemType: apparel.data[0].tag_name,
        });
      } else {
        this.setState({
          selected_itemType: this.state.itemType[0],
        });
      }
    } else {
      this.setState({
        selected_colors: this.state.colors[0],
        selected_itemType: this.state.itemType[0],
      });
    }
  }


  continue = () => {
    axios.get('/checkcookie').then(({ data: { cookie, logged } }) => {
      const { history } = this.props;
      if (cookie) {
        history.push({ pathname: '/item-list', logged });
      } else {
        history.push('/login-form');
      }
    });
  };

  toggleOpen = (e) => {
    const clicked = e.target.value.split('.');
    if (clicked[1] === 'more') {
      this.setState({ isOpen: true, selectedCat: clicked[0] });
    } else {
      const selected = `selected_${clicked[0]}`;
      this.setState({ [selected]: clicked[1] });
    }
  };

  toggleClose = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  changeSelected = (e) => {
    e.preventDefault();
    const selected = `selected_${this.state.selectedCat}`;
    this.setState({ [selected]: e.target.value.split('.')[1], isOpen: false });
  };

  render() {
    const { image_url } = this.props.location.details;
    return (
      <React.Fragment>
        <Title {...this.props} />
        <Header title="Get your details" />
        <Form
          image={image_url}
          {...this.state}
          toggleOpen={this.toggleOpen}
          toggleClose={this.toggleClose}
          changeSelected={this.changeSelected}
        />
        <Button />
        <GButton title="CONTINUE" onClick={this.continue} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
