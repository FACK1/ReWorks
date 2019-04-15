import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import deleteIcon from './garbage.png';
import {
  condition, labelSize, age, sizeCategory, colors, patterns,
} from '../../data';

import { ImgDiv, DeleteButton } from './itemdetails.style';

class ItemDetails extends Component {
  state = {
    itemDetails: this.props.location.itemDetails,
    isOpen: false,
    selectedCat: null,
    selected_brands: { id: '', brandName: '', name: '' },
    selected_itemType: { id: '', itemType: '', name: '' },
    itemType: [],
    colors: [],
    brands: [],
    condition,
    labelSize,
    age,
    sizeCategory,
    patterns,
    showDefaultOption: false,
  };

  componentDidMount() {
    const { itemDetails } = this.state;
    const clarifaiColors = itemDetails.colors.split(',');
    let price;
    let currency;
    if (itemDetails.price.length > 1) {
      price = itemDetails.price.slice(0, itemDetails.price.length - 1);
      currency = itemDetails.price.slice(-1);
    } else {
      price = '';
      currency = itemDetails.price;
    }

    const clarifaiHex = itemDetails.colorshex.split(',');
    const allColors = [];
    clarifaiColors.map((color, i) => {
      allColors.push({ name: color, hex: clarifaiHex[i] });
    });

    allColors.filter((color) => {
      colors.map((color2, i) => {
        if (color.name === color2.name) {
          colors.splice(i, 1);
        }
      });
    });
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
      selected_hex: itemDetails.hex,
      selected_itemType: {
        id: itemDetails.typeId,
        itemType: itemDetails.type,
        name: itemDetails.type,
      },
      selected_price: price,
      selected_currency: currency,
      selected_details: itemDetails.details,
      colors: [...allColors, ...colors],
      clarifaiColors,
      clarifaiHex,
      selected_sizeCategory: itemDetails.sizeCategory,
      selected_patterns: itemDetails.pattern,
    });

    axios.get('/getbrands').then(({ data }) => {
      if (data.success) {
        const brands = this.removeDuplicate(data.data, this.state.selected_brands);
        this.setState({ brands: [this.state.selected_brands, ...brands] });
      }
    });

    axios.get('/get-types').then(({ data }) => {
      const types = this.removeDuplicate(data.itemType, this.state.selected_itemType);
      this.setState({ itemType: [this.state.selected_itemType, ...types] });
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
    } else if (name === 'colors') {
      const { colors } = this.state;
      const color = colors.filter(x => (x.name === value ? x.hex : null));
      this.setState({ selected_hex: color[0].hex, selected_colors: color[0].name, isOpen: false });
    } else if (name === 'itemType') {
      const value1 = JSON.parse(value);
      this.setState({ [`selected_${name}`]: { id: value1.id, itemType: value1.itemType } });
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
    } else if (name === 'colors') {
      const { colors } = this.state;
      const color = colors.filter(x => (x.name === value ? x.hex : null));
      this.setState({ selected_hex: color[0].hex, selected_colors: color[0].name, isOpen: false });
    } else if (name === 'itemType') {
      const value1 = JSON.parse(value);
      this.setState({
        [`selected_${name}`]: { id, itemType: value1.itemType, name: value },
        isOpen: false,
      });
    } else {
      this.setState({ [selected]: value, isOpen: false });
    }
  };

  checkForChanges = () => {
    const {
      selected_brands,
      selected_condition,
      selected_labelSize,
      selected_age,
      selected_colors,
      selected_itemType,
      selected_price,
      selected_currency,
      selected_details,
      selected_sizeCategory,
      selected_patterns,
      itemDetails,
    } = this.state;

    const itemDetailsArray = [];
    const updateItemDetails = [];

    const keys = Object.keys(itemDetails);

    keys.map((key) => {
      itemDetailsArray.push(itemDetails[key]);
    });

    updateItemDetails.push(
      itemDetails.itemId,
      selected_itemType.itemType,
      selected_itemType.id,
      selected_labelSize,
      itemDetails.url,
      itemDetails.name,
      selected_price,
      selected_colors,
      selected_brands.brandName,
      selected_condition,
      selected_age,
      selected_details,
      selected_brands.id,
      itemDetails.colors,
      selected_sizeCategory,
      selected_patterns,
    );

    let flag = false;
    itemDetailsArray.map((object, i) => {
      if (object !== updateItemDetails[i]) {
        flag = true;
      }
    });

    return flag;
  };

  updateItem = () => {
    const updatedFlag = this.checkForChanges();
    const { history } = this.props;
    const id = this.state.itemDetails.itemId;
    const {
      selected_brands,
      selected_condition,
      selected_labelSize,
      selected_age,
      selected_colors,
      selected_hex,
      selected_itemType,
      selected_price,
      selected_currency,
      selected_details,
      itemDetails,
      selected_sizeCategory,
      selected_patterns,
    } = this.state;

    const newUpdates = {
      size: selected_labelSize,
      type: selected_itemType.id,
      price: selected_price.concat(selected_currency),
      brandId: selected_brands.id,
      condition: selected_condition,
      details: selected_details,
      color: selected_colors,
      hex: selected_hex,
      age: selected_age,
      sizeCategory: selected_sizeCategory,
      pattern: selected_patterns,
    };

    if (updatedFlag) {
      axios
        .put(`/edit-item/${id}`, newUpdates)
        .then(({ data }) => {
          if (data.success) {
            history.push('/item-list');
          }
        })
        .catch(() => history.push('/error'));
    }
    history.push('/item-list');
  };

  removeDuplicate = (array, item) => {
    array.map((object, i) => {
      if (object.id === item.id) {
        array.splice(i, 1);
      }
    });
    return array;
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
        <GButton title="Save" onClick={this.updateItem} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ItemDetails;
