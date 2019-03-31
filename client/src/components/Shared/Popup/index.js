import React, { Component } from "react";
import { StyledModal, Category, CloseBtn, DataContainer } from "./popup.style";

class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, toggleClose, data, changeSelected, name } = this.props;
    const dataHere = data
      ? data.slice(5).map(ele => {
          return (
            <CloseBtn
              key={ele}
              type="submit"
              value={name + "." + ele}
              onClick={changeSelected}
            >
              {ele}
            </CloseBtn>
          );
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
          <Category>
            {`${name}`
              .split(/(?=[A-Z])/)
              .join(" ")
              .toUpperCase()}
          </Category>
          <DataContainer>{dataHere}</DataContainer>
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default Popup;
