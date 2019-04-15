import React from 'react';
import {
  StyledModal, Category, CloseBtn, DataContainer, ChoiceBtn,
} from './popup.style';

const Popup = ({
  open, toggleClose, data, changeSelected, name,
}) => {
  let dataHere;
  if (name[0] === 'brands') {
    dataHere = data
      ? data.map(ele => (
        <ChoiceBtn
          type="submit"
          key={ele.name}
          id={ele.id}
          name={name}
          value={`{"id": "${ele.id}", "name": "${ele.name}"}`}
          onClick={changeSelected}
        >
          {ele.name}
        </ChoiceBtn>
      ))
      : null;
  } else if (name[0] === 'itemType') {
    dataHere = data
      ? data.map(ele => (
        <ChoiceBtn
          key={ele.id}
          type="submit"
          name={name}
          id={ele.id}
          value={`{"id": "${ele.id}", "name": "${ele.name}"}`}
          onClick={changeSelected}
        >
          {ele.name}
        </ChoiceBtn>
      ))
      : null;
  } else if (name[0] === 'colors') {
    dataHere = data
      ? data.map(ele => (
        <ChoiceBtn
          type="submit"
          key={ele.name}
          name={ele.name}
          value={ele.name}
          onClick={changeSelected}
          hexColor={ele.hex}
          nameColor={ele.name}
        >
          {ele.name}
        </ChoiceBtn>
      ))
      : null;
  } else {
    dataHere = data
      ? data.map(ele => (
        <ChoiceBtn key={ele} type="submit" name={name} value={ele} onClick={changeSelected}>
          {ele}
        </ChoiceBtn>
      ))
      : null;
  }
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
};

export default Popup;
