import React, { Component } from "react";
import { StyledModal, Category, CloseBtn } from "./popup.style";

class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, toggleClose, data } = this.props;
    const dataHere = data
      ? data.map(ele => {
          return <li>{ele}</li>;
        })
      : null;
    return (
      <React.Fragment>
        <StyledModal
          isOpen={open}
          onBackgroundClick={toggleClose}
          onEscapeKeydown={toggleClose}
        >
          <CloseBtn type="submit" onClick={toggleClose}>
            close
          </CloseBtn>
          <Category>Item Type</Category>
          <ul>{dataHere}</ul>
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default Popup;
