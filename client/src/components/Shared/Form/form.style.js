import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const StyledImgCon = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  background-color: #FBFBFB;
  border-radius: 50%;
  margin: auto;
  margin-bottom:20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  height: 200px;
`;

export const StyledInformation = styled.h2`
  margin-left: 34.5%;
  font-size: 18px;
  color: #909090;
  text-align: left;
  @media (max-width: 650px) {
     font-size: 12px;
     margin-left: 10%;
  }
`;

export const StyledNotic = styled.h2`
  margin-left: 34.5%;
	font-size: 18px;
	text-align: left;
	@media (max-width: 650px) {
		font-size: 12px;
    margin-left: 10%;
	}
`;

export const StyledLabel = styled.label`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 16px;
	@media (max-width: 650px) {
		font-size: 16px;
	}
`;

export const StyledDiv = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: row;
  @media (min-width: 650px) {
    width:40%;
    margin-left: 30%;
  }
`;

export const StyledItem = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
`;
export const StyledLabels = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
`;

export const StyledSelect = styled.select`
	background-color: #FBFBFB;
	font-size: 20px;
	max-width: 150px;
	width: 150px;
	margin-bottom: 16px;
	border: 1px solid #F2F2F2;
	padding: 7px 14px;
	@media (max-width: 650px) {
		font-size: 16px;
	}
`;

export const StyledSelectCurrency = styled.select`
  width:60px;
  max-width:60px;
  background-color: #FBFBFB;
  font-size: 20px;
  margin-bottom: 16px;
  border: 1px solid #F2F2F2;
  padding: 7px 14px;
  @media (max-width: 650px) {
    font-size: 16px;
   }
`;


export const StyledOption = styled.option`
  color: ${props => (props.nameColor === 'White' ? 'Black' : props.hexColor)};

`;

export const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
export const StyledInput = styled.input`
	background-color: #FBFBFB;
	font-size: 20px;
	max-width: 60px;
	width: 60px;
	margin-bottom: 16px;
	border: 1px solid #F2F2F2;
	padding: 7px 14px;
	@media (max-width: 650px) {
		font-size: 16px;
	}
`;

export const StyledTextarea = styled.textarea`
	font-size: 20px;
	width:80%;
	background-color:#FBFBFB;
	border:1px solid  #F2F2F2;
	height:80px;
	margin:20px auto;
	display:flex;
	text-align:left;
  font-size: 16px;
  ::placeholder{
  font-family:'Assistant';
  padding-left: 2%;
  padding-top: 2%;

}
    @media (min-width: 650px) {
      width: 28%;
      margin-left: 36%;
  }
`;
