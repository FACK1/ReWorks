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
  background-color: #fbfbfb;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  height: 200px;
`;

export const StyledInformation = styled.h2`
  margin-left: 30px;
  font-size: 18px;
  color: #909090;
  text-align: left;
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

export const StyledNotic = styled.h2`
  margin-left: 30px;
  font-size: 18px;
  text-align: left;
  @media (max-width: 650px) {
    font-size: 12px;
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

export const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
export const StyledInput = styled.input`
  background-color: #fbfbfb;
  font-size: 20px;
  max-width: 60px;
  width: 60px;
  margin-bottom: 16px;
  border: 1px solid #f2f2f2;
  padding: 7px 14px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const StyledTextarea = styled.textarea`
  font-size: 20px;
  width:242px
  padding:0 30px;
  background-color:#FBFBFB;
  border:1px solid  #F2F2F2;
  height:80px;
  margin:20px auto;
  display:flex;
  text-align:left;
  @media (max-width: 650px) {
    font-size: 16px;
  }
  ::placeholder{
    font-family:'Assistant';
  }
`;

export const SelectStyle = styled.div`
  max-width: 150px;
  margin-bottom: 16px;
`;
