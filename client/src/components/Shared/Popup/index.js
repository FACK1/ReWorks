import React from 'react';
import {
  StyledModal, Category, CloseBtn, DataContainer,
} from './popup.style';

const Popup = ({
  open, toggleClose, data, changeSelected, name,
}) => {
  {
    const dataHere = data
      ? data.map(ele => (
        <CloseBtn key={ele} type="submit" value={`${name}.${ele}`} onClick={changeSelected}>
          {ele}
        </CloseBtn>
      ))
      : null;
    return (
      <React.Fragment>
        <StyledModal isOpen={open} onBackgroundClick={toggleClose} onEscapeKeydown={toggleClose}>
          <CloseBtn type="submit" onClick={toggleClose}>
            close
          </CloseBtn>
          <Category>
            {`${name}`
              .split(/(?=[A-Z])/)
              .join(' ')
              .toUpperCase()}
          </Category>
          <DataContainer>{dataHere}</DataContainer>
        </StyledModal>
      </React.Fragment>
    );
  }
};

export default Popup;
