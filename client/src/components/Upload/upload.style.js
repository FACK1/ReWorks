import styled from 'styled-components';

export const ImgIcon = styled.img`
  :hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 30vh;
`;
export const Instructions = styled.div`
  width:40%;
  display: flex;
  flex-direction: column;
  height: 30vh;
  margin-left:30%;
  margin-bottom:5%;
  margin-top: 3%;
  @media (max-width: 650px) {
    width:90%
    font-size: 20px;
    margin-bottom: 8%;
    margin-top: 7%;
    margin-left: 7%
  }
`;

export const TakeGoodPhoto = styled.p`
  font-family: 'Assistant';
  text-align: center;
  font-size: 24px;
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
