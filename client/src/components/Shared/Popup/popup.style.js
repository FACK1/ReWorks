import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  width: 85%;
  height: 85vh;
  background-color: #FFF;
  border-radius:5px;
  @media (max-width: 650px) {
    overflow-y: scroll;
  }
`;

export const Category = styled.h1`
  width: 90%;
  margin: auto;
  padding: 10px;
  border-bottom: 0.5px dashed;
  text-align: center;
  font-size: 24px;
  font-family: "Assistant";
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
  font-family: "Assistant";
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;
