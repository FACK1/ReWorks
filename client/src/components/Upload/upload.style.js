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
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 30vh;
  @media (max-width: 650px) {
    font-size: 20px;
    height: 40vh;
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
