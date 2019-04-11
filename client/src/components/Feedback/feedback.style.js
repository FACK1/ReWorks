import styled from 'styled-components';

export const ThanksText = styled.p`
  font-weight: bold;
  font-size: 17.5px;
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;

export const CheckboxContainer = styled.div`
  margin-top: 30px;
  display: flex;
  margin-bottom: 38px;
  flex-flow: column wrap;
  font-size: 25px;
  @media (min-width: 650px) {
    font-size: 50px;
    width: 35%;
    margin-left: 32%;
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Para = styled.p`
  margin-top: 30px;
  display: flex;
  text-align: center;
  flex-flow: column wrap;
  font-size: 16px;
  font-weight: bold;
  padding-top:1px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 30px;
  margin-right: 30px;
`;
