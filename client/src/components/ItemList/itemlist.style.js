import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-around;
`;

export const Container = styled.div`
  height:50vh;
  width:100%;
  overflow-y: auto;
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 650px) {
    overflow-y: scroll;
    height:50vh;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 20px;
  background-color: #fafafa;
  padding: 22px 0px;
  text-align: left;
  text-indent: 20px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const StyledBottom = styled.div`
`;

export const StyledLink = styled(Link)`
   font-size: 16px;
   font-weight: bold;
   color: #1ed390;
   margin-left: 15px;
   text-decoration: none;
   margin-bottom:14px;
 `;


export const StyledCSVLink = styled(CSVLink)`
  font-size: 18px;
  font-family: "Assistant";
  background-color: #1ed390;
  padding: 20px 0px;
  color: white;
  border: none;
  text-decoration: none;
  font-weight: bold;
  width: 45%;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export const GButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top:50px;
`;
