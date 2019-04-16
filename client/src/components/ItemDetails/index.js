import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import deleteIcon from './garbage.png';
import {
  conditions, sizes, ages, categories, colors, patterns, currencies,
} from '../../data';

import { ImgDiv, DeleteButton } from './itemdetails.style';

class ItemDetails extends Component {
  state = {
    itemDetails: this.props.location.itemDetails,
    isOpen: false,
    selectedCat: null,
    colors: [],
    conditions,
    sizes,
    ages,
    categories,
    patterns,
    currencies,
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
      selectedBrand: {
        id: itemDetails.brandId,
        value: itemDetails.brand,
        label: itemDetails.brand,
      },
      selectedCondition: { value: itemDetails.condition, label: itemDetails.condition },
      selectedSize: { value: itemDetails.size, label: itemDetails.size },
      selectedAge: { value: itemDetails.age, label: itemDetails.age },
      selected_colors: itemDetails.color,
      selected_hex: itemDetails.hex,
      selectedType: {
        id: itemDetails.typeId,
        value: itemDetails.type,
        label: itemDetails.type,
      },
      selected_price: price,
      selectedCurrency: { value: currency, label: currency },
      selected_details: itemDetails.details,
      colors: [...allColors, ...colors],
      clarifaiColors,
      clarifaiHex,
      selectedCategory: { value: itemDetails.sizeCategory, label: itemDetails.sizeCategory },
      selectedPattern: { value: itemDetails.pattern, label: itemDetails.pattern },
    });

    axios.get('/getbrands').then(({ data }) => {
      if (data.success) {
        const brands = [];
        data.data.map((brand) => {
          brands.push({
            id: brand.id,
            value: brand.name,
            label: brand.name,
          });
        });
        this.setState({ brands });
      }
    });

    axios.get('/get-types').then(({ data }) => {
      const types = [];
      data.itemType.map((type) => {
        types.push({
          id: type.id,
          value: type.name,
          label: type.name,
        });
      });
      this.setState({ types });
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
    this.setState({ [`selected_${name}`]: value });
  };

  // checkForChanges = () => {
  //   const {
  //     selectedBrand,
  //     selectedCondition,
  //     selectedSize,
  //     selectedAge,
  //     selected_colors,
  //     selectedType,
  //     selected_price,
  //     selectedCurrency,
  //     selected_details,
  //     selectedCategory,
  //     selectedPattern,
  //     itemDetails,
  //   } = this.state;
  //
  //   const itemDetailsArray = [];
  //   const updateItemDetails = [];
  //
  //   const keys = Object.keys(itemDetails);
  //
  //   keys.map((key) => {
  //     itemDetailsArray.push(itemDetails[key]);
  //   });
  //
  //   updateItemDetails.push(
  //     itemDetails.itemId,
  //     selectedType.value,
  //     selectedType.id,
  //     selectedSize.value,
  //     itemDetails.url,
  //     itemDetails.name,
  //     selected_price,
  //     selected_colors,
  //     selectedBrand.value,
  //     selectedCondition.value,
  //     selectedAge.value,
  //     selected_details,
  //     selectedBrand.id,
  //     itemDetails.colors,
  //     selectedCategory.value,
  //     selectedPattern.value,
  //   );
  //
  //   let flag = false;
  //   itemDetailsArray.map((object, i) => {
  //     if (object !== updateItemDetails[i]) {
  //       flag = true;
  //     }
  //   });
  //
  //   return flag;
  // };

  updateItem = () => {
    // const updatedFlag = this.checkForChanges();
    const { history } = this.props;
    const id = this.state.itemDetails.itemId;
    const {
      selectedBrand,
      selectedCondition,
      selectedSize,
      selectedAge,
      selected_colors,
      selected_hex,
      selectedType,
      selected_price,
      selectedCurrency,
      selected_details,
      itemDetails,
      selectedCategory,
      selectedPattern,
    } = this.state;

    const newUpdates = {
      size: selectedSize.value,
      type: selectedType.id,
      price: selected_price.concat(selectedCurrency.value),
      brandId: selectedBrand.id,
      condition: selectedCondition.value,
      details: selected_details,
      color: selected_colors,
      hex: selected_hex,
      age: selectedAge.value,
      sizeCategory: selectedCategory.value,
      pattern: selectedPattern.value,
    };

    // if (updatedFlag) {
    console.log('new', newUpdates);
    axios
      .put(`/edit-item/${id}`, newUpdates)
      .then(({ data }) => {
        if (data.success) {
          history.push('/item-list');
        }
      })
      .catch(() => history.push('/error'));
    // }
    // history.push('/item-list');
  };

  handleChange = (value, select) => {
    const { name } = select;
    this.setState({ [`selected${name}`]: value });
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
          handleChange={this.handleChange}
        />
        <Button onClick={this.goBack} />
        <GButton title="Save" onClick={this.updateItem} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ItemDetails;
