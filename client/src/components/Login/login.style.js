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
    justify-content: space-around;
    flex-direction:column;
    margin:20px;
    width: 28%;
    margin-left:35%;
    font-size: 20px;
      @media (max-width: 650px){
        width: 75%;
        margin-left:13%;
        font-size: 30px;
      }
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


export const StyledSignUp = styled.label`
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
  border-bottom: ${props => (props.StyleError ? '1px solid #D33E1E' : '1px solid #7D7D7D')};
  @media (max-width: 650px) {
    font-size: 16px;
  }
  ::placeholder{
    font-family:'Assistant';
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

export const BtnsContainer = styled.div`
 display:flex;
 justify-content:center;
 width:50%;
 margin:auto;
 @media (max-width: 650px) {
  width:100%
}
`;


