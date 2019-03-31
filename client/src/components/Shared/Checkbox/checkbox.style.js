import styled from 'styled-components';

export const CheckboxText = styled.label`
  font-size: 16px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10%;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: #1ed390;
  stroke-width: 4px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: white;
  transition: all 150ms;
  border: solid #1ed390;
  margin-right: 15px;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const StyleSpan = styled.span`
  margin-left: 8px;
`;
