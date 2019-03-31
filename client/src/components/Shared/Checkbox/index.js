import React from 'react';
import {
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxText,
  StyleSpan,
} from './checkbox.style';

const Checkbox = ({ name, checked, ...props }) => (
  <CheckboxText>
    <CheckboxContainer>
      <HiddenCheckbox name={name} checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <StyleSpan>{name}</StyleSpan>
  </CheckboxText>
);

export default Checkbox;
