import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const StyledModal = Modal.styled`
  height: 85vh;
  width: 85vw;
  background-color: #FFF;
  border-radius:5px;
  @media (max-width: 650px) {
    overflow-y: scroll;
  }
`;

export const Category = styled.h1`
  width: 90vw;
  margin: auto;
  padding: 10px;
  border-bottom: 0.5px dashed;
  text-align: center;
  font-size: 24px;
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

export const CloseBtn = styled.button`
  border: none;
  background: #fff;
  :hover {
    cursor: pointer;
  }
  margin: 10px;
  font-size: 20px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const DataContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
`;
