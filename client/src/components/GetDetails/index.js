import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';

class GetDetails extends Component {
  state = {
    isOpen: false,
    selectedCat: null,
    selected_itemType: '',
    selected_colors: '',
    selected_brands: '',
    selected_brandsID: '',
    selected_condition: '',
    selected_labelSize: '',
    selected_price: '',
    selected_details: '',
    selected_age: '',
    itemType: [
      'shirt',
      'trousers',
      'leggings',
      'yoga pants',
      'button-down',
      'hat',
      'beanie',
      'coat',
    ],
    colors: ['white', 'black', 'red', 'blue', 'green', 'limegreen', 'gray'],
    brands: [
      'cool',
      'cooler',
      'coolest',
      'the coolest',
      'THE coolest',
      'THE COOLEST',
      'THE ABSOLUTE COOLEST',
    ],
    condition: [
      'new',
      'worn once',
      'worn less than five times',
      'not worn at all',
      'semi-new',
      'not new at all',
      'just no',
      'totally nah',
    ],
    labelSize: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL', 'XXXXXL'],
    age: ['one year', '6 months', '3 months', '1 months', '2 weeks', '4 weeks', '9 weeks'],
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
    axios.get('/getbrands')
      .then(({ data }) => {
        if (data.success) {
          this.setState({ brands: data.data });
        }
      });
  }


  continue = () => {
    axios.get('/checkcookie').then(({ data: { cookie, logged } }) => {
      const { history } = this.props;
      const inputs = {
        type: this.state.selected_itemType,
        age: this.state.selected_age,
        price: this.state.selected_price,
        color: this.state.selected_colors,
        condition: this.state.selected_condition,
        size: this.state.selected_labelSize,
        url: this.props.location.details.image_url,
        details: this.state.selected_details,
        brandId: this.state.selected_brandsID,
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
  };

  toggleOpen = (e) => {
    const clicked = e.target.value.split('.');
    if (clicked[1] === 'more') {
      this.setState({ isOpen: true, selectedCat: clicked[0] });
    } else {
      const selected = `selected_${clicked[0]}`;
      this.setState({ [selected]: clicked[1] });
      if (selected === 'selected_brands') {
        this.state.brands.forEach((brand) => {
          if (brand.brandName === clicked[1]) {
            this.setState({ selected_brandsID: brand.brandID });
          }
        });
      }
    }
  };

  inputPrice=(e) => {
    this.setState({
      selected_price: e.target.value,
    });
  }

  inputDetails=(e) => {
    this.setState({
      selected_details: e.target.value,
    });
  }

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
          inputPrice={this.inputPrice}
          inputDetails={this.inputDetails}
        />
        <Button />
        <GButton title="CONTINUE" onClick={this.continue} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
