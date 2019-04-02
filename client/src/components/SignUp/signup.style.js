import styled from 'styled-components';

export const StyledContainer = styled.form`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledBottom = styled.form`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const StyledInput = styled.input`
  border:none;
  border-bottom:1px solid #7D7D7D;
  font-size: 20px;
  margin-bottom:16px;
  padding:7px 0px;
  border-bottom: ${props => (props.StyleError ? '1px solid red' : '1px solid #7D7D7D')};
  @media (max-width: 650px) {
    font-size: 16px;
  }
  ::placeholder{
    font-family:'Assistant';
  }
`;
export const StyledForm = styled.form`
  display:flex;
  flex-shrink: 0;
  flex-grow: 1;
  justify-content: space-around;
  flex-direction:column;
  margin:20px;
`;
export const StyledLabel = styled.label`
  font-size: 20px;
  font-weight:bold;
  color:#1ED390;
  margin-bottom:3px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;
export const StyledLogin = styled.label`
  font-size: 16px;
  color:#1ED390;
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;
export const StyledP = styled.div`
  display:flex;
  justify-content: center;
  flex-direction:row;
`;

export const StyledText = styled.div`
  font-size: 16px;
  margin-right:5px;
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.h1`
font-size: 16px;
color:grey;
margin-top:-10px;
margin-bottom:20px;
@media (max-width: 650px) {
  font-size: 12px;
}
`;
