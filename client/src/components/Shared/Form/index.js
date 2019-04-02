import React, { Component } from 'react';
import { ModalProvider } from 'styled-react-modal';
import Popup from '../Popup';

import {
  StyledForm,
  StyledImg,
  StyledInformation,
  StyledNotic,
  StyledDiv,
  StyledLabel,
  StyledSelect,
  StyledOption,
  StyledItem,
  StyledLabels,
  StyledInput,
  StyledTextarea,
  StyledImgCon,
} from './form.style';

class Form extends Component {
  state = {
    categories: [
      'Item Type*',
      'Color*',
      'Brand',
      'Other',
      'Condition',
      'Label size',
      'Age',
      'purchase price',
    ],
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
  };

  componentDidMount() {
    const { apparel, colors } = this.props;
    if (apparel && colors) {
      const outfit = apparel.data.map(ele => ele.tag_name);

      const colours = colors.data.map(ele => ele.name);

      this.setState({
        itemType: [...outfit, ...this.state.itemType],
        colors: [...colours, ...this.state.colors],
      });
    }
  }

  render() {
    const {
      image, toggleOpen, isOpen, selectedCat, toggleClose, changeSelected, selected_itemType,
      selected_colors,
      selected_brands,
      selected_condition,
      selected_labelSize,
      selected_age,
    } = this.props;
    return (
      <StyledForm>
        <StyledImgCon>
          <StyledImg src={image} />
        </StyledImgCon>

        <StyledInformation>PIECE INFORMATION</StyledInformation>
        <StyledNotic>Please verify the items marked* </StyledNotic>

        <StyledDiv>
          <StyledLabels>
            {this.state.categories.map(category => (
              <StyledLabel key={category}>{category}</StyledLabel>
            ))}
          </StyledLabels>

          <StyledItem>
            <StyledSelect onChange={toggleOpen} value={selected_itemType}>
              {this.state.itemType.map(
                item => (this.state.itemType.indexOf(item) >= 5 ? (
                  <StyledOption key={item} value={item} hidden>
                    {item}
                  </StyledOption>
                ) : (
                  <StyledOption key={item} value={`itemType.${item}`}>
                    {item}
                  </StyledOption>
                )),
              )}
              <StyledOption value="itemType.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} value={selected_colors}>
              {this.state.colors.map(
                color => (this.state.colors.indexOf(color) >= 5 ? (
                  <StyledOption key={color} value={color} hidden>
                    {color}
                  </StyledOption>
                ) : (
                  <StyledOption key={color} value={`colors.${color}`}>
                    {color}
                  </StyledOption>
                )),
              )}
              <StyledOption value="colors.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} value={selected_brands}>
              {this.state.brands.map(
                brand => (this.state.brands.indexOf(brand) >= 5 ? (
                  <StyledOption key={brand} value={brand} hidden>
                    {brand}
                  </StyledOption>
                ) : (
                  <StyledOption key={brand} value={`brands.${brand}`}>
                    {brand}
                  </StyledOption>
                )),
              )}
              <StyledOption value="brands.more">More...</StyledOption>
            </StyledSelect>

            <StyledInput type="text" name="brand" placeholder="brand" />

            <StyledSelect onChange={toggleOpen} value={selected_condition}>
              {this.state.condition.map(
                cond => (this.state.condition.indexOf(cond) >= 5 ? (
                  <StyledOption key={cond} value={cond} hidden>
                    {cond}
                  </StyledOption>
                ) : (
                  <StyledOption key={cond} value={`condition.${cond}`}>
                    {cond}
                  </StyledOption>
                )),
              )}
              <StyledOption value="condition.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} value={selected_labelSize}>
              {this.state.labelSize.map(
                size => (this.state.labelSize.indexOf(size) >= 5 ? (
                  <StyledOption key={size} value={size} hidden>
                    {size}
                  </StyledOption>
                ) : (
                  <StyledOption key={size} value={`labelSize.${size}`}>
                    {size}
                  </StyledOption>
                )),
              )}
              <StyledOption value="labelSize.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} value={selected_age}>
              {this.state.age.map(
                time => (this.state.age.indexOf(time) >= 5 ? (
                  <StyledOption key={time} value={time} hidden>
                    {time}
                  </StyledOption>
                ) : (
                  <StyledOption key={time} value={`age.${time}`}>
                    {time}
                  </StyledOption>
                )),
              )}
              <StyledOption value="age.more">More...</StyledOption>
            </StyledSelect>

            <StyledInput type="text" name="price" placeholder="price" />
          </StyledItem>
        </StyledDiv>

        <StyledTextarea name="extra" placeholder="More .e.g. What do you love about it?" />
        <ModalProvider>
          <Popup
            open={isOpen}
            data={this.state[selectedCat]}
            toggleClose={toggleClose}
            changeSelected={changeSelected}
            name={[selectedCat]}
          />
        </ModalProvider>
      </StyledForm>
    );
  }
}

export default Form;
