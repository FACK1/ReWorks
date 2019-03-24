import styled from 'styled-components';

export const StyledForm = styled.form`
display:flex;
justify-content: center;
flex-direction:column;
`;

export const StyledImg = styled.img`
display:flex;
background-color: #909090;
border-radius:50%;
margin:auto;
width: 40%;
height:30%;
`;

export const StyledInformation = styled.h2`
margin-left:40px;
font-size: 18px;
font-family:'Assistant';
color:#909090;
text-align:left;
@media (max-width: 650px) {
  font-size: 12px;
}
`;

export const StyledNotic = styled.h2`
margin-left:40px;
font-size: 18px;
font-family:'Assistant';
text-align:left;
@media (max-width: 650px) {
  font-size: 12px;
}
`;

export const StyledLabel = styled.label`
font-size: 20px;
font-family:'Assistant';
text-align: center;
margin-bottom:16px;
@media (max-width: 650px) {
  font-size: 16px;
}
`;

export const StyledDiv = styled.div`
display:flex;
justify-content: space-around;
flex-direction:row;
`;

export const StyledItem = styled.div`
display:flex;
justify-content: space-around;
flex-direction:column;

`;
export const StyledLabels = styled.div`
display:flex;
justify-content: space-around;
flex-direction:column;
`;

export const StyledSelect = styled.select`
background-color:#FBFBFB;
font-size: 20px;
max-width:100px;
width:100px;
margin-bottom:16px;
font-family:'Assistant';
border:1px solid  #F2F2F2;
padding:7px 14px;
@media (max-width: 650px) {
  font-size: 16px;
}
`;

export const StyledOption = styled.option`

`;

export const StyledInput = styled.input`
background-color:#FBFBFB;
font-size: 20px;
max-width:70px;
width:70px;
margin-bottom:16px;
font-family:'Assistant';
border:1px solid  #F2F2F2;
padding:7px 14px;
@media (max-width: 650px) {
  font-size: 16px;
}
`;

export const StyledTextarea = styled.textarea`
font-size: 20px;
width:200px
height:80px;
margin:auto;
display:flex;
font-family:'Assistant';
text-align:left;
@media (max-width: 650px) {
  font-size: 16px;
}
`;
