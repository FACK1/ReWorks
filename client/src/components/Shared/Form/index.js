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
      selectedCat: null,
      selected_itemType: "",
      selected_colors: "",
      selected_brands: "",
      selected_condition: "",
      selected_labelSize: "",
      selected_age: "",
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
      condition: [
        "new",
        "worn once",
        "worn less than five times",
        "not worn at all",
        "semi-new",
        "not new at all",
        "just no",
        "totally nah"
      ],
      labelSize: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"],
      age: [
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
    if (clicked[1] === "more") {
      this.setState({ isOpen: true, selectedCat: clicked[0] });
    } else {
      const selected = "selected_" + clicked[0];
      this.setState({ [selected]: e.target.value });
    }
  };

  toggleClose = e => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  changeSelected = e => {
    e.preventDefault();
    const selected = "selected_" + this.state.selectedCat;
    this.setState({ [selected]: e.target.value.split(".")[1], isOpen: false });
  };

  componentDidMount() {
    const apparel = this.props.apparel.data.map(ele => {
      return ele.tag_name;
    });

    const colors = this.props.colors.data.map(ele => {
      return ele.name;
    });

    this.setState({
      itemType: [...apparel, ...this.state.itemType],
      colors: [...colors, ...this.state.colors]
    });
  }

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
            <StyledSelect
              onChange={this.toggleOpen}
              value={this.state.selected_itemType}
            >
              {this.state.itemType.map(item => {
                return this.state.itemType.indexOf(item) >= 5 ? (
                  <StyledOption key={item} value={item} hidden>
                    {item}
                  </StyledOption>
                ) : (
                  <StyledOption key={item} value={"itemType." + item}>
                    {item}
                  </StyledOption>
                );
              })}
              <StyledOption value="itemType.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect
              onChange={this.toggleOpen}
              value={this.state.selected_colors}
            >
              {this.state.colors.map(color => {
                return this.state.colors.indexOf(color) >= 5 ? (
                  <StyledOption key={color} value={color} hidden>
                    {color}
                  </StyledOption>
                ) : (
                  <StyledOption key={color} value={"colors." + color}>
                    {color}
                  </StyledOption>
                );
              })}
              <StyledOption value="colors.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect
              onChange={this.toggleOpen}
              value={this.state.selected_brands}
            >
              {this.state.brands.map(brand => {
                return this.state.brands.indexOf(brand) >= 5 ? (
                  <StyledOption key={brand} value={brand} hidden>
                    {brand}
                  </StyledOption>
                ) : (
                  <StyledOption key={brand} value={"brands." + brand}>
                    {brand}
                  </StyledOption>
                );
              })}
              <StyledOption value="brands.more">More...</StyledOption>
            </StyledSelect>

            <StyledInput type="text" name="brand" placeholder="brand" />

            <StyledSelect
              onChange={this.toggleOpen}
              value={this.state.selected_condition}
            >
              {this.state.condition.map(cond => {
                return this.state.condition.indexOf(cond) >= 5 ? (
                  <StyledOption key={cond} value={cond} hidden>
                    {cond}
                  </StyledOption>
                ) : (
                  <StyledOption key={cond} value={"condition." + cond}>
                    {cond}
                  </StyledOption>
                );
              })}
              <StyledOption value="condition.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect
              onChange={this.toggleOpen}
              value={this.state.selected_labelSize}
            >
              {this.state.labelSize.map(size => {
                return this.state.labelSize.indexOf(size) >= 5 ? (
                  <StyledOption key={size} value={size} hidden>
                    {size}
                  </StyledOption>
                ) : (
                  <StyledOption key={size} value={"labelSize." + size}>
                    {size}
                  </StyledOption>
                );
              })}
              <StyledOption value="labelSize.more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect
              onChange={this.toggleOpen}
              value={this.state.selected_age}
            >
              {this.state.age.map(time => {
                return this.state.age.indexOf(time) >= 5 ? (
                  <StyledOption key={time} value={time} hidden>
                    {time}
                  </StyledOption>
                ) : (
                  <StyledOption key={time} value={"age." + time}>
                    {time}
                  </StyledOption>
                );
              })}
              <StyledOption value="age.more">More...</StyledOption>
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
            data={this.state[this.state.selectedCat]}
            toggleClose={this.toggleClose}
            changeSelected={this.changeSelected}
            name={this.state.selectedCat}
          />
        </ModalProvider>
      </StyledForm>
    );
  }
}

export default Form;
