import React, { Component } from "react";
import { ModalProvider } from "styled-react-modal";
import Popup from "../Popup";

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
  StyledImgCon
} from "./form.style";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: null,
      categories: [
        "Item Type*",
        "Color*",
        "Brand",
        "Other",
        "Condition",
        "Label size",
        "Age",
        "purchase price"
      ],
      colors: ["white", "black", "red", "blue", "green", "limegreen", "gray"],
      brands: [
        "cool",
        "cooler",
        "coolest",
        "the coolest",
        "THE coolest",
        "THE COOLEST",
        "THE ABSOLUTE COOLEST"
      ],
      itemType: [
        "shirt",
        "trousers",
        "leggings",
        "yoga pants",
        "button-down",
        "hat",
        "beanie",
        "coat"
      ],
      conditions: [
        "new",
        "worn once",
        "worn less than five times",
        "not worn at all",
        "semi-new",
        "not new at all",
        "just... no",
        "totally nah"
      ],
      labelSizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"],
      ages: [
        "one year",
        "6 months",
        "3 months",
        "1 months",
        "2 weeks",
        "4 weeks",
        "9 weeks"
      ]
    };
  }

  toggleOpen = e => {
    const clicked = e.target.value.split(".");
    if (clicked[0] === "more") {
      this.setState({ isOpen: true, selected: clicked[1] });
    }
  };

  toggleClose = e => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  render() {
    const { image } = this.props;
    return (
      <StyledForm>
        <StyledImgCon>
          <StyledImg src={image} />
        </StyledImgCon>

        <StyledInformation>PIECE INFORMATION</StyledInformation>
        <StyledNotic>Please verify the items marked* </StyledNotic>

        <StyledDiv>
          <StyledLabels>
            {this.state.categories.map(category => {
              return <StyledLabel key={category}>{category}</StyledLabel>;
            })}
          </StyledLabels>

          <StyledItem>
            <StyledSelect onChange={this.toggleOpen}>
              {this.state.itemType.slice(0, 5).map(item => {
                return (
                  <StyledOption key={item} value={item}>
                    {item}
                  </StyledOption>
                );
              })}
              <StyledOption value="more.itemType">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={this.toggleOpen}>
              {this.state.colors.slice(0, 5).map(color => {
                return (
                  <StyledOption key={color} value={color}>
                    {color}
                  </StyledOption>
                );
              })}
              <StyledOption value="more.colors">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={this.toggleOpen}>
              {this.state.brands.slice(0, 5).map(brand => {
                return (
                  <StyledOption key={brand} value={brand}>
                    {brand}
                  </StyledOption>
                );
              })}
              <StyledOption value="more.brands">More...</StyledOption>
            </StyledSelect>

            <StyledInput type="text" name="brand" placeholder="brand" />

            <StyledSelect onChange={this.toggleOpen}>
              {this.state.conditions.slice(0, 5).map(condition => {
                return (
                  <StyledOption key={condition} value={condition}>
                    {condition}
                  </StyledOption>
                );
              })}
              <StyledOption value="more.conditions">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={this.toggleOpen}>
              {this.state.labelSizes.slice(0, 5).map(size => {
                return (
                  <StyledOption key={size} value={size}>
                    {size}
                  </StyledOption>
                );
              })}
              <StyledOption value="more.labelSizes">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={this.toggleOpen}>
              {this.state.ages.slice(0, 5).map(age => {
                return (
                  <StyledOption key={age} value={age}>
                    {age}
                  </StyledOption>
                );
              })}
              <StyledOption value="more.ages">More...</StyledOption>
            </StyledSelect>

            <StyledInput type="text" name="price" placeholder="price" />
          </StyledItem>
        </StyledDiv>

        <StyledTextarea
          name="extra"
          placeholder="More .e.g. What do you love about it?"
        />
        <ModalProvider>
          <Popup
            open={this.state.isOpen}
            data={this.state[this.state.selected]}
            toggleClose={this.toggleClose}
          />
        </ModalProvider>
      </StyledForm>
    );
  }
}

export default Form;
