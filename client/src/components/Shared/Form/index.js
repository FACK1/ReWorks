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
      image, toggleOpen, isOpen, selectedCat, toggleClose, changeSelected, selected_itemType,
      selected_colors,
      selected_brands,
      selected_condition,
      selected_labelSize,
      selected_age,
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
            <StyledSelect onChange={toggleOpen} value={`itemType.${selected_itemType}`}>
              {itemType.map(
                item => (itemType.indexOf(item) >= 5 ? (
                  <StyledOption key={item} value={`itemType.${item}`} hidden>
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

            <StyledSelect onChange={toggleOpen} value={`colors.${selected_colors}`}>
              {colors.map(
                color => (colors.indexOf(color) >= 5 ? (
                  <StyledOption key={color} value={`colors.${color}`} hidden>
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

            <StyledSelect onChange={toggleOpen} value={`brands.${selected_brands}`}>
              {brands.map(
                brand => (brands.indexOf(brand) >= 5 ? (
                  <StyledOption key={brand} value={`brands.${brand}`} hidden>
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

            <StyledSelect onChange={toggleOpen} value={`condition.${selected_condition}`}>
              {condition.map(
                cond => (condition.indexOf(cond) >= 5 ? (
                  <StyledOption key={cond} value={`condition.${cond}`} hidden>
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

            <StyledSelect onChange={toggleOpen} value={`labelSize.${selected_labelSize}`}>
              {labelSize.map(
                size => (labelSize.indexOf(size) >= 5 ? (
                  <StyledOption key={size} value={`labelSize.${size}`} hidden>
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

            <StyledSelect onChange={toggleOpen} value={`age.${selected_age}`}>
              {age.map(
                time => (age.indexOf(time) >= 5 ? (
                  <StyledOption key={time} value={`age.${time}`} hidden>
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
