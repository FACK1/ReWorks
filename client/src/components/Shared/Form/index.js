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
      'Purchase price',
    ],
  };

  render() {
    const {
      image,
      toggleOpen,
      isOpen,
      selectedCat,
      toggleClose,
      changeSelected,
      selected_itemType,
      selected_colors,
      selected_brands,
      selected_condition,
      selected_labelSize,
      selected_age,
      selected_price,
      selected_details,
      itemType,
      colors,
      brands,
      condition,
      labelSize,
      age,
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
            <StyledSelect onChange={toggleOpen} name="itemType" value={selected_itemType}>
              {itemType.map(item => (itemType.indexOf(item) >= 5 ? (
                <StyledOption key={item} value={item} hidden>
                  {item}
                </StyledOption>
              ) : (
                <StyledOption key={item} value={item}>
                  {item}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="colors" value={selected_colors}>
              {colors.map(color => (colors.indexOf(color) >= 5 ? (
                <StyledOption key={color} value={color} hidden>
                  {color}
                </StyledOption>
              ) : (
                <StyledOption key={color} value={color}>
                  {color}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="brands" value={selected_brands.name}>
              {brands.map(brand => (brands.indexOf(brand) >= 5 ? (
                <StyledOption
                  key={brand.name}
                  value={`{"id": "${brand.id}", "name": "${brand.name}"}`}
                  hidden
                >
                  {brand.name}
                </StyledOption>
              ) : (
                <StyledOption
                  key={brand.name}
                  value={`{"id": "${brand.id}", "name": "${brand.name}"}`}
                >
                  {brand.name}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledInput type="text" name="brand" placeholder="brand" />

            <StyledSelect onChange={toggleOpen} name="condition" value={selected_condition}>
              {condition.map(cond => (condition.indexOf(cond) >= 5 ? (
                <StyledOption key={cond} value={cond} hidden>
                  {cond}
                </StyledOption>
              ) : (
                <StyledOption key={cond} value={cond}>
                  {cond}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="labelSize" value={selected_labelSize}>
              {labelSize.map(size => (labelSize.indexOf(size) >= 5 ? (
                <StyledOption key={size} value={size} hidden>
                  {size}
                </StyledOption>
              ) : (
                <StyledOption key={size} value={size}>
                  {size}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="age" value={selected_age}>
              {age.map(time => (age.indexOf(time) >= 5 ? (
                <StyledOption key={time} value={time} hidden>
                  {time}
                </StyledOption>
              ) : (
                <StyledOption key={time} value={time}>
                  {time}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledInput
              onChange={toggleOpen}
              type="text"
              name="price"
              value={selected_price}
              placeholder="price"
            />
          </StyledItem>
        </StyledDiv>

        <StyledTextarea
          onChange={toggleOpen}
          name="details"
          value={selected_details}
          placeholder="More .e.g. What do you love about it?"
        />
        <ModalProvider>
          <Popup
            open={isOpen}
            toggleClose={toggleClose}
            changeSelected={changeSelected}
            name={[selectedCat]}
            data={this.props[selectedCat]}
          />
        </ModalProvider>
      </StyledForm>
    );
  }
}

export default Form;
