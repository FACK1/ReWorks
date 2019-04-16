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
  StyledSelectCurrency,
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
      selected_patterns,
      selected_currency,
      itemType,
      colors,
      brands,
      condition,
      labelSize,
      age,
      patterns,
      showDefaultOption,
      selected_sizeCategory,
      sizeCategory,
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
            <StyledSelect onChange={toggleOpen} name="itemType" value={selected_itemType.name}>
              {itemType.map(item => (itemType.indexOf(item) >= 5 ? (
                <StyledOption
                  key={item.id}
                  value={`{"id": "${item.id}", "name": "${item.name}"}`}
                  hidden
                >
                  {item.itemType}
                </StyledOption>
              ) : (
                <StyledOption
                  key={item.id}
                  value={`{"id": "${item.id}", "name": "${item.name}"}`}
                >
                  {item.itemType}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="colors" value={selected_colors}>
              {colors.map(color => (colors.indexOf(color) >= 5 ? (
                <StyledOption
                  value={color.name}
                  hexColor={color.hex}
                  nameColor={color.name}
                  {...this.props}
                  hidden
                >
                  {color.name}
                </StyledOption>
              ) : (
                <StyledOption
                  value={color.name}
                  hexColor={color.hex}
                  nameColor={color.name}
                  {...this.props}
                >
                  {color.name}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect
              onChange={toggleOpen}
              name="patterns"
              value={selected_patterns}
              StyleError={isErrorPattern}
              {...this.props}
              errorText={patternError}
            >
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {patterns.map(pattern => (patterns.indexOf(pattern) >= 5 ? (
                <StyledOption key={pattern} value={pattern} hidden>
                  {pattern}
                </StyledOption>
              ) : (
                <StyledOption key={pattern} value={pattern}>
                  {pattern}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>
            <ErrorMessage>{patternError}</ErrorMessage>

            <StyledSelect
              onChange={toggleOpen}
              name="brands"
              value={selected_brands.name}
              StyleError={isErrorBrand}
              {...this.props}
              errorText={brandError}
            >
              {showDefaultOption && (
              <option default hidden>
                  Select...
              </option>
              )}
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
            <ErrorMessage>{brandError}</ErrorMessage>

            <StyledSelect
              onChange={toggleOpen}
              name="condition"
              value={selected_condition}
              StyleError={isErrorCondition}
              {...this.props}
              errorText={conditionError}
            >
              {showDefaultOption && (
              <option default hidden>
                  Select...
              </option>
              )}
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
            <ErrorMessage>{conditionError}</ErrorMessage>

            <StyledSelect
              onChange={toggleOpen}
              name="labelSize"
              value={selected_labelSize}
              StyleError={isErrorLabelSize}
              {...this.props}
              errorText={labelSizeError}
            >
              {showDefaultOption && (
              <option default hidden>
                  Select...
              </option>
              )}
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
            <ErrorMessage>{labelSizeError}</ErrorMessage>

            <StyledSelect
              onChange={toggleOpen}
              name="sizeCategory"
              value={selected_sizeCategory}
              StyleError={isErrorSizeCategory}
              {...this.props}
              errorText={sizeCategoryError}
            >
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {sizeCategory.map(size => (sizeCategory.indexOf(size) >= 5 ? (
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
            <ErrorMessage>{sizeCategoryError}</ErrorMessage>

            <StyledSelect
              onChange={toggleOpen}
              name="age"
              value={selected_age}
              StyleError={isErrorAge}
              {...this.props}
              errorText={ageError}
            >
              {showDefaultOption && (
              <option default hidden>
                  Select...
              </option>
              )}
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
            <ErrorMessage>{ageError}</ErrorMessage>

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
