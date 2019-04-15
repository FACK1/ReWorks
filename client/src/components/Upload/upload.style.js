import styled from 'styled-components';

export const ImgIcon = styled.img`
  width: 80%;
  margin-left:7%;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 650px) {
    margin-left:18%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  height: 30vh;
`;
export const Instructions = styled.div`
  width:42%;
  display: flex;
  flex-direction: column;
  height: 21vh;
  margin-left:28%;
  margin-bottom:7%;
  @media (max-width: 650px) {
    width:90%
    margin-bottom: 30%;
    margin-top: 7%;
    margin-left: 7%
  }
`;

export const TakeGoodPhoto = styled.p`
  font-family: 'Assistant';
  text-align: center;
  font-size: 19px;
  padding: 0px 40px 10px 40px;
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

export const FooterStyle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;
