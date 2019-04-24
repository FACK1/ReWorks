import React, { Component } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import CreatableSelect from 'react-select/lib/Creatable';

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
  SelectStyle,
  StyledInputBrand,
} from './form.style';

class Form extends Component {
  state = {
    categories: [
      'Item Type*',
      'Colour*',
      'Pattern',
      'Condition',
      'Label size',
      'Size Category',
      'Age',
      'Purchase price',
      'Brand',
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

  errorStyle = errorFlag => ({
    control: styles => ({
      ...styles,
      backgroundColor: 'white',
      borderColor: errorFlag ? 'red' : '#ccc',
    }),
  });

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
      selectedPrice,
      selectedDetails,
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
            <SelectStyle>
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
            </SelectStyle>

            <SelectStyle>
              <Select
                value={selectedColor}
                className="basic-single"
                classNamePrefix="select"
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable
                name="Color"
                options={colors}
                styles={this.colourStyles}
                onChange={handleChange}
              />
            </SelectStyle>

            <SelectStyle>
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
                styles={this.errorStyle(isErrorPattern)}
              />
            </SelectStyle>

            <SelectStyle>
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
                styles={this.errorStyle(isErrorCondition)}
              />
            </SelectStyle>

            <SelectStyle>
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
                styles={this.errorStyle(isErrorLabelSize)}
              />
            </SelectStyle>

            <SelectStyle>
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
                styles={this.errorStyle(isErrorSizeCategory)}
              />
            </SelectStyle>

            <SelectStyle>
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
                styles={this.errorStyle(isErrorAge)}
              />
            </SelectStyle>

            <StyledPriceContainer>
              <StyledInput
                onChange={toggleOpen}
                type="text"
                name="Price"
                value={selectedPrice}
                placeholder="Price"
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

            <StyledInputBrand
              onChange={toggleOpen}
              type="text"
              name="Brand"
              value={selectedBrand}
              placeholder="Brand Name"
            />
          </StyledItem>
        </StyledDiv>

        <StyledTextarea
          onChange={toggleOpen}
          name="Details"
          value={selectedDetails}
          placeholder="More .e.g. What do you love about it?"
        />
      </StyledForm>
    );
  }
}

export default Form;
// <Select
//   value={selectedBrand}
//   className="basic-single"
//   classNamePrefix="select"
//   isDisabled={false}
//   isLoading={false}
//   isClearable={false}
//   isRtl={false}
//   isSearchable
//   name="Brand"
//   options={brands}
//   onChange={handleChange}
//   styles={this.errorStyle(isErrorBrand)}
// />
