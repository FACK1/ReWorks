import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import deleteIcon from './garbage.png';
import {
  brands, itemType, condition, labelSize, age,
} from '../../data';

import { ImgDiv, DeleteButton } from './itemdetails.style';

class ItemDetails extends Component {
  state = {
    itemDetails: this.props.location.itemDetails,
    isOpen: false,
    selectedCat: null,
    selected_brands: { id: '', brandName: '', name: '' },
    itemType,
    colors: ['Black'],
    brands,
    condition,
    labelSize,
    age,
  };

  componentDidMount() {
    const { itemDetails } = this.state;
    const clarifaiColors = itemDetails.colors.split(',');

    this.setState({
      selected_brands: {
        id: itemDetails.brandId,
        brandName: itemDetails.brand,
        name: itemDetails.brand,
      },
      selected_condition: itemDetails.condition,
      selected_labelSize: itemDetails.size,
      selected_age: itemDetails.age,
      selected_colors: itemDetails.color,
      selected_itemType: itemDetails.type,
      selected_price: itemDetails.price,
      selected_details: itemDetails.details,
      itemType: [itemDetails.type, ...itemType],
      colors: [itemDetails.color, ...clarifaiColors],
      brands: [{ id: itemDetails.brandId, name: itemDetails.brand }, ...brands],
    });
  }

  goBack = () => {
    const { history } = this.props;
    history.push('/item-list');
  };

  deleteItem = () => {
    const { history } = this.props;
    const id = this.state.itemDetails.itemId;

    axios
      .get(`/delete-item/${id}`)
      .then(({ data }) => {
        if (data.success) {
          history.push('/item-list');
        }
      })
      .catch(() => history.push('/error'));
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
    const { url } = this.state.itemDetails;

    return (
      <React.Fragment>
        <Title {...this.props} />
        <ImgDiv>
          <DeleteButton onClick={this.deleteItem}>
            <img src={deleteIcon} alt="delete icon" />
          </DeleteButton>
        </ImgDiv>
        <Form
          image={url}
          {...this.state}
          toggleOpen={this.toggleOpen}
          toggleClose={this.toggleClose}
          changeSelected={this.changeSelected}
        />
        <Button onClick={this.goBack} />
        <GButton title="Save" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ItemDetails;
