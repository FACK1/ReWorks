import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import {
  brands, colors, itemType, condition, labelSize, age,
} from '../../data';

class GetDetails extends Component {
  state = {
    isOpen: false,
    selectedCat: null,
    selected_brands: { id: brands[0].id, brandName: brands[0].name, name: brands[0].name },
    itemType,
    colors,
    brands,
    condition,
    labelSize,
    age,
  };

  componentDidMount() {
    const { apparel } = this.props.location.details;
    const apiColors = this.props.location.details.colors;

    this.setState({
      selected_condition: condition[0],
      selected_labelSize: labelSize[0],
      selected_age: age[0],
      selected_price: '',
      selected_details: '',
    });

    if (apparel || apiColors) {
      const colours = apiColors.data.map(ele => ele.name);
      this.setState({
        colors: [...colours, ...colors],
        selected_colors: colours[0],
      });

      if (apparel && apparel.data.length > 0) {
        const outfit = apparel.data.map(ele => ele.tag_name);
        this.setState({
          itemType: [...outfit, ...itemType],
          selected_itemType: outfit[0],
        });
      } else {
        this.setState({
          selected_itemType: itemType[0],
        });
      }
    } else {
      this.setState({
        selected_colors: colors[0],
        selected_itemType: itemType[0],
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
    const { value, name } = e.target;
    if (value === 'more') {
      this.setState({ isOpen: true, selectedCat: name });
    } else if (name === 'brands') {
      const value1 = JSON.parse(value);
      this.setState({ [`selected_${name}`]: { id: value1.id, brandName: value1.name } });
    } else {
      this.setState({ [`selected_${name}`]: value });
    }
  };

  toggleClose = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  changeSelected = (e) => {
    e.preventDefault();
    const { value, name, id } = e.target;
    const selected = `selected_${this.state.selectedCat}`;
    if (name === 'brands') {
      const value1 = JSON.parse(value);
      this.setState({ [selected]: { id, brandName: value1.name, name: value }, isOpen: false });
    } else {
      this.setState({ [selected]: value, isOpen: false });
    }
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
