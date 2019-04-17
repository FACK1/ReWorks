import React, { Component } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';

import {
  StyledForm,
  StyledImg,
  StyledInformation,
  StyledNotic,
  StyledDiv,
  StyledLabel,
  StyledItem,
  StyledLabels,
  StyledInput,
  StyledTextarea,
  StyledImgCon,
  StyledPriceContainer,
  ErrorMessage,
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

  colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, {
      data, isDisabled, isFocused, isSelected,
    }) => {
      const color = data.hex;

      return {
        ...styles,
        backgroundColor: isDisabled ? null : isSelected ? color : isFocused ? color : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : color,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: styles => ({ ...styles, ...this.dot() }),
    placeholder: styles => ({ ...styles, ...this.dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...this.dot(data.hex) }),
  };

  dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'flex',
      marginRight: 8,
      paddingLeft: 10,
      height: 10,
    },
  });

  render() {
    const {
      image,
      toggleOpen,
      handleChange,
      selectedType,
      selectedColor,
      selectedBrand,
      selectedCondition,
      selectedSize,
      selectedAge,
      selectedCategory,
      selected_price,
      selected_details,
      selectedPattern,
      selectedCurrency,
      types,
      colors,
      brands,
      conditions,
      sizes,
      ages,
      patterns,
      categories,
      currencies,
      patternError,
      brandError,
      conditionError,
      labelSizeError,
      sizeCategoryError,
      ageError,
      isErrorPattern,
      isErrorBrand,
      isErrorCondition,
      isErrorLabelSize,
      isErrorSizeCategory,
      isErrorAge,
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
              isClearable={false}
              isRtl={false}
              isSearchable
              name="Type"
              options={types}
              onChange={handleChange}
            />
            <Select
              value={selectedColor}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable={false}
              name="Color"
              options={colors}
              styles={this.colourStyles}
              onChange={handleChange}
            />
            <Select
              value={selectedPattern}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable
              name="Pattern"
              options={patterns}
              onChange={handleChange}
            />
            <ErrorMessage StyleError={isErrorPattern}>{patternError}</ErrorMessage>
            <Select
              value={selectedBrand}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable
              name="Brand"
              options={brands}
              onChange={handleChange}
            />
            <ErrorMessage StyleError={isErrorBrand}>{brandError}</ErrorMessage>
            <Select
              value={selectedCondition}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable
              name="Condition"
              options={conditions}
              onChange={handleChange}
            />
            <ErrorMessage StyleError={isErrorCondition}>{conditionError}</ErrorMessage>
            <Select
              value={selectedSize}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable
              name="Size"
              options={sizes}
              onChange={handleChange}
            />
            <ErrorMessage StyleError={isErrorLabelSize}>{labelSizeError}</ErrorMessage>
            <Select
              value={selectedCategory}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable
              name="Category"
              options={categories}
              onChange={handleChange}
            />
            <ErrorMessage StyleError={isErrorSizeCategory}>{sizeCategoryError}</ErrorMessage>
            <Select
              value={selectedAge}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable
              name="Age"
              options={ages}
              onChange={handleChange}
            />
            <ErrorMessage StyleError={isErrorAge}>{ageError}</ErrorMessage>

            <StyledPriceContainer>
              <StyledInput
                onChange={toggleOpen}
                type="text"
                name="price"
                value={selected_price}
                placeholder="price"
              />
              <Select
                value={selectedCurrency}
                className="basic-single"
                classNamePrefix="select"
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable
                name="Currency"
                options={currencies}
                onChange={handleChange}
              />
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

export default Form;
