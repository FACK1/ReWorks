import React, { Component } from 'react';
import { ModalProvider } from 'styled-react-modal';
import Select from 'react-select';
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
  StyledSelectCurrency,
  StyledPriceContainer,
} from './form.style';

class Form extends Component {
  state = {
    categories: [
      'Item Type*',
      'Colour*',
      'Pattern',
      'Brand',
      'Condition',
      'Label size',
      'Size Category',
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
      handleChange,
      selectedType,
      // selected_colors,
      selectedBrand,
      selectedCondition,
      selectedSize,
      selectedAge,
      selectedCategory,
      selected_price,
      selected_details,
      selectedPattern,
      selected_currency,
      types,
      colors,
      brands,
      conditions,
      sizes,
      ages,
      patterns,
      categories,
      showDefaultOption,
    } = this.props;
    return (
      <StyledForm>
        <StyledImgCon>
          <StyledImg src={image} />
        </StyledImgCon>

        <StyledInformation>ITEM INFORMATION</StyledInformation>
        <StyledNotic>Please verify the items marked* </StyledNotic>

        <StyledDiv>
          <StyledLabels>
            {this.state.categories.map(category => (
              <StyledLabel key={category}>{category}</StyledLabel>
            ))}
          </StyledLabels>

          <StyledItem>
            <Select
              value={selectedType}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="type"
              options={types}
              onChange={handleChange}
            />
            <Select
              value={null}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="color"
              options={colors}
              onChange={handleChange}
            />
            <Select
              value={selectedPattern}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="pattern"
              options={patterns}
              onChange={handleChange}
            />
            <Select
              value={selectedBrand}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="brand"
              options={brands}
              onChange={handleChange}
            />
            <Select
              value={selectedCondition}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="condition"
              options={conditions}
              onChange={handleChange}
            />
            <Select
              value={selectedSize}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="size"
              options={sizes}
              onChange={handleChange}
            />
            <Select
              value={selectedCategory}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="size-category"
              options={categories}
              onChange={handleChange}
            />
            <Select
              value={selectedAge}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable
              isRtl={false}
              isSearchable
              name="age"
              options={ages}
              onChange={handleChange}
            />

            <StyledPriceContainer>
              <StyledInput
                onChange={toggleOpen}
                type="text"
                name="price"
                value={selected_price}
                placeholder="price"
              />

              <StyledSelectCurrency onChange={toggleOpen} name="currency" value={selected_currency}>
                {showDefaultOption && (
                  <option default hidden>
                    $
                  </option>
                )}
                <StyledOption value="£">£</StyledOption>
                <StyledOption value="$">$</StyledOption>
                <StyledOption value="€">€</StyledOption>
              </StyledSelectCurrency>
            </StyledPriceContainer>
          </StyledItem>
        </StyledDiv>

        <StyledTextarea
          onChange={toggleOpen}
          name="details"
          value={selected_details}
          placeholder="More .e.g. What do you love about it?"
        />
      </StyledForm>
    );
  }
}
// <ModalProvider>
//   <Popup
//     open={isOpen}
//     toggleClose={toggleClose}
//     changeSelected={changeSelected}
//     name={[selectedCat]}
//     data={this.props[selectedCat]}
//   />
// </ModalProvider>
export default Form;
