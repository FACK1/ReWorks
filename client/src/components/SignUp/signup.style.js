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
export const StyledInput = styled.input`
  border:none;
  border-bottom:1px solid #7D7D7D;
  font-size: 20px;
  margin-bottom:16px;
  padding:7px 0px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
  ::placeholder{
    font-family:'Assistant';
  }
`;
