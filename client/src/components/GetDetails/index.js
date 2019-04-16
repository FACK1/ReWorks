import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import {
  condition, labelSize, age, sizeCategory, patterns, colors,
} from '../../data';

class GetDetails extends Component {
  state = {
    isOpen: false,
    selectedCat: null,
    selected_brands: { id: '', brandName: '', name: '' },
    selected_itemType: { id: '', itemType: '', name: '' },
    itemType: [],
    colors,
    brands: [],
    condition,
    labelSize,
    age,
    sizeCategory,
    patterns,
    clarifaiColors: '',
    clarifaiHex: '',
    selected_condition: '',
    selected_labelSize: '',
    selected_age: '',
    selected_price: '0',
    selected_details: '',
    selected_sizeCategory: '',
    selected_hex: '',
    selected_patterns: '',
    selected_currency: '£',
    showDefaultOption: true,
    title: '',
  };

  componentDidMount() {
    if (this.props.location.details) {
      const { apparel } = this.props.location.details;
      const apiColors = this.props.location.details.colors;

      if (apparel || apiColors) {
        const colours = apiColors.data.map(ele => ({ name: ele.name, hex: ele.hex }));

        colours.filter((color) => {
          colors.map((color2, i) => {
            if (color.name === color2.name) {
              colors.splice(i, 1);
            }
          });
        });

        const clarifaiColours = apiColors.data.map(ele => ele.name);
        const clarifaiColoursHex = apiColors.data.map(ele => ele.hex);

        const clarifaiColors = clarifaiColours.join(',');

        const clarifaiHex = clarifaiColoursHex.join(',');
        this.setState({
          colors: [...colours, ...colors],
          selected_colors: colours[0].name,
          selected_hex: colours[0].hex,
          clarifaiColors,
          clarifaiHex,
        });

        if (apparel && apparel.data.length > 0) {
          const outfit = apparel.data.map((ele) => {
            const name = ele.tag_name;
            const object = { itemType: name, name, id: '' };
            return object;
          });
          this.setState({
            itemType: outfit,
            selected_itemType: outfit[0],
          });
        }
      }
      axios.get('/getbrands').then(({ data }) => {
        if (data.success) {
          const brands = data.data;
          this.setState({
            brands,
          });
        }
      });

      axios.get('/checkcookie').then(({ data: { cookie, logged } }) => {
        if (cookie) {
          this.setState({ title: 'SAVE YOUR ITEM' });
        } else {
          this.setState({ title: 'LOGIN TO SAVE YOUR ITEM' });
        }
      });
    } else {
      const { history } = this.props;
      history.push('/upload-photo');
    }

    axios.get('/get-types').then(({ data }) => {
      const type = data.itemType;
      this.setState({ itemType: [...this.state.itemType, ...type] });
    });
  }

  validate = () => {
    let isError = false;
    this.setState({
      isErrorPattern: false,
      isErrorBrand: false,
      isErrorCondition: false,
      isErrorLabelSize: false,
      isErrorSizeCategory: false,
      isErrorAge: false,
    });

    const errors = {
      patternError: '',
      brandError: '',
      conditionError: '',
      labelSizeError: '',
      sizeCategoryError: '',
      ageError: '',
      isErrorPattern: false,
      isErrorBrand: false,
      isErrorCondition: false,
      isErrorLabelSize: false,
      isErrorSizeCategory: false,
      isErrorAge: false,
    };
    if (this.state.selected_patterns < 1) {
      isError = true;
      errors.isErrorPattern = true;
      errors.patternError = 'Please select your pattern.';
    }
    if (this.state.selected_brands.id < 1) {
      isError = true;
      errors.isErrorBrand = true;
      errors.brandError = 'Please select your brand.';
    }
    if (this.state.selected_condition < 1) {
      isError = true;
      errors.isErrorCondition = true;
      errors.conditionError = 'Please select your condition.';
    }
    if (this.state.selected_labelSize < 1) {
      isError = true;
      errors.isErrorLabelSize = true;
      errors.labelSizeError = 'Please select your label size.';
    }
    if (this.state.selected_sizeCategory < 1) {
      isError = true;
      errors.isErrorSizeCategory = true;
      errors.sizeCategoryError = 'Please select your size category.';
    }
    if (this.state.selected_age < 1) {
      isError = true;
      errors.isErrorAge = true;
      errors.ageError = 'Please select your age.';
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  continue = () => {
    const err = this.validate();
    if (!err) {
      axios.get('/checkcookie').then(({ data: { cookie, logged } }) => {
        const { history } = this.props;
        const price = this.state.selected_price.concat(this.state.selected_currency);
        const inputs = {
          type: this.state.selected_itemType.id,
          age: this.state.selected_age,
          price,
          color: this.state.selected_colors,
          colors: this.state.clarifaiColors,
          colorshex: this.state.clarifaiHex,
          hex: this.state.selected_hex,
          condition: this.state.selected_condition,
          size: this.state.selected_labelSize,
          url: this.props.location.details.image_url,
          details: this.state.selected_details,
          brandId: this.state.selected_brands.id,
          sizeCategory: this.state.selected_sizeCategory,
          pattern: this.state.selected_patterns,
        };

        if (inputs.type === '') {
          axios.post('/add-type', { name: this.state.selected_itemType.itemType, shortcut: 'New Type' }).then((res) => {
            const { typeId } = res.data;
            inputs.type = typeId;
            return inputs;
          }).then((inputs) => {
            if (cookie) {
              axios.post('/add-item', inputs).then(({ data }) => {
                if (data.success) {
                  history.push({ pathname: '/item-list', logged });
                }
              });
            } else {
              history.push({ pathname: '/login-form', data: inputs });
            }
          });
        } else if (cookie) {
          axios.post('/add-item', inputs).then(({ data }) => {
            if (data.success) {
              history.push({ pathname: '/item-list', logged });
            }
          });
        } else {
          history.push({ pathname: '/login-form', data: inputs });
        }
      });
    }
  };


  continue = () => {
    const err = this.validate();
    if (!err) {
      axios.get('/checkcookie').then(({ data: { cookie, logged } }) => {
        const { history } = this.props;
        const price = this.state.selected_price.concat(this.state.selected_currency);
        const inputs = {
          type: this.state.selected_itemType,
          age: this.state.selected_age,
          price,
          color: this.state.selected_colors,
          colors: this.state.clarifaiColors,
          colorshex: this.state.clarifaiHex,
          hex: this.state.selected_hex,
          condition: this.state.selected_condition,
          size: this.state.selected_labelSize,
          url: this.props.location.details.image_url,
          details: this.state.selected_details,
          brandId: this.state.selected_brands.id,
          sizeCategory: this.state.selected_sizeCategory,
          pattern: this.state.selected_patterns,
        };

        if (cookie) {
          axios.post('/add-item', inputs).then(({ data }) => {
            if (data.success) {
              history.push({ pathname: '/item-list', logged });
            }
          });
        } else {
          history.push({ pathname: '/login-form', data: inputs });
        }
      });
    }
  };

  toggleOpen = (e) => {
    const { value, name } = e.target;
    if (value === 'more') {
      this.setState({ isOpen: true, selectedCat: name });
    } else if (name === 'brands') {
      const value1 = JSON.parse(value);
      this.setState({ [`selected_${name}`]: { id: value1.id, brandName: value1.name } });
    } else if (name === 'itemType') {
      const value1 = JSON.parse(value);
      this.setState({ [`selected_${name}`]: { id: value1.id, itemType: value1.name, name: value } });
    } else if (name === 'colors') {
      const { colors } = this.state;
      const color = colors.filter(x => (x.name === value ? x : null));
      this.setState({ selected_hex: color[0].hex, selected_colors: color[0].name });
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
      this.setState({
        [selected]: { id, brandName: value1.name, name: value },
        isOpen: false,
      });
    } else if (name === 'itemType') {
      const value1 = JSON.parse(value);
      this.setState({ [`selected_${name}`]: { id, itemType: value1.name, name: value }, isOpen: false });
    } else if (name === 'colors') {
      const { colors } = this.state;
      const color = colors.filter(x => (x.name === value ? x.hex : null));
      this.setState({ selected_hex: color[0].hex, selected_colors: color[0].name, isOpen: false });
    } else {
      this.setState({ [selected]: value, isOpen: false });
    }
  };

  render() {
    let imageUrl;
    if (this.props.location.details) {
      imageUrl = this.props.location.details.image_url;
    }
    return (
      <React.Fragment>
        <Title {...this.props} />
        <Header title="Get your details" />
        <Form
          image={imageUrl}
          {...this.state}
          toggleOpen={this.toggleOpen}
          toggleClose={this.toggleClose}
          changeSelected={this.changeSelected}
        />
        <Button />
        <GButton title={this.state.title} onClick={this.continue} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
