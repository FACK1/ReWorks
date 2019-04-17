import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import {
  conditions, sizes, ages, categories, patterns, colors, currencies,
} from '../../data';

class GetDetails extends Component {
  state = {
    isOpen: false,
    selectedCat: null,
    selectedBrand: null,
    selectedType: null,
    types: [],
    colors,
    brands: [],
    conditions,
    sizes,
    ages,
    categories,
    patterns,
    currencies,
    clarifaiColors: '',
    clarifaiHex: '',
    selectedCondition: null,
    selectedSize: null,
    selectedAge: null,
    selectedColor: null,
    selected_price: '0',
    selected_details: '',
    selectedCategory: null,
    selected_hex: '',
    selected_patterns: '',
    selectedCurrency: { value: '£', label: '£' },
    title: '',
  };

  componentDidMount() {
    if (this.props.location.details) {
      const { apparel } = this.props.location.details;
      const apiColors = this.props.location.details.colors;

      if (apparel || apiColors) {
        const colours = apiColors.data.map(ele => ({
          value: ele.name,
          label: ele.name,
          hex: ele.hex,
        }));

        colours.filter((color) => {
          colors.map((color2, i) => {
            if (color.value === color2.value) {
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
          selectedColor: colours[0],
          clarifaiColors,
          clarifaiHex,
        });

        if (apparel && apparel.data.length > 0) {
          const outfit = apparel.data.map((ele) => {
            const name = ele.tag_name;
            const object = { id: '', value: name, label: name };
            return object;
          });
          this.setState({
            types: outfit,
            selectedType: outfit[0],
          });
        }
      }
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
          this.setState({
            brands,
          });
        }
      });

      axios.get('/checkcookie').then(({ data: { cookie } }) => {
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
      const airtableNames = data.itemType.map(item => item.name);
      const filtered = this.state.types.filter(item => !airtableNames.includes(item.value));

      const types = [];
      data.itemType.map((type) => {
        types.push({
          id: type.id,
          value: type.name,
          label: type.name,
        });
      });

      this.setState({ types: [...filtered, ...types] }, () => {
        if (airtableNames.includes(this.state.selectedType.value)) {
          const found = data.itemType.filter(item => item.name === this.state.selectedType.value);
          this.setState(prevState => ({
            selectedType: {
              ...prevState.selectedType,
              id: found[0].id,
            },
          }));
        }
      });
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
    if (this.state.selectedPattern === null) {
      isError = true;
      errors.isErrorPattern = true;
      errors.patternError = 'Please select your pattern.';
    }
    if (this.state.selectedBrand === null) {
      isError = true;
      errors.isErrorBrand = true;
      errors.brandError = 'Please select your brand.';
    }
    if (this.state.selectedCondition === null) {
      isError = true;
      errors.isErrorCondition = true;
      errors.conditionError = 'Please select your condition.';
    }
    if (this.state.selectedSize === null) {
      isError = true;
      errors.isErrorLabelSize = true;
      errors.labelSizeError = 'Please select your label size.';
    }
    if (this.state.selectedCategory === null) {
      isError = true;
      errors.isErrorSizeCategory = true;
      errors.sizeCategoryError = 'Please select your size category.';
    }
    if (this.state.selectedAge === null) {
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
        const price = this.state.selected_price.concat(this.state.selectedCurrency.value);
        const inputs = {
          type: this.state.selectedType.id,
          age: this.state.selectedAge.value,
          price,
          color: this.state.selectedColor.value,
          colors: this.state.clarifaiColors,
          colorshex: this.state.clarifaiHex,
          hex: this.state.selectedColor.hex,
          condition: this.state.selectedCondition.value,
          size: this.state.selectedSize.value,
          url: this.props.location.details.image_url,
          details: this.state.selected_details,
          brandId: this.state.selectedBrand.id,
          sizeCategory: this.state.selectedCategory.value,
          pattern: this.state.selectedPattern.value,
        };

        if (inputs.type === '') {
          axios
            .post('/add-type', { name: this.state.selectedType.value, shortcut: 'New Type' })
            .then((res) => {
              const { typeId } = res.data;
              inputs.type = typeId;
              return inputs;
            })
            .then((inputs) => {
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

  toggleOpen = (e) => {
    const { value, name } = e.target;
    this.setState({ [`selected_${name}`]: value });
  };

  handleChange = (value, select) => {
    const { name } = select;
    this.setState({ [`selected${name}`]: value });
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
          handleChange={this.handleChange}
        />
        <Button />
        <GButton title={this.state.title} onClick={this.continue} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
