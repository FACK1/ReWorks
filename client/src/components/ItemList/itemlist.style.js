import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/header.style';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
`;

export const StyledHeader = styled(Header)`
  text-align: left;
`;

export const StyledBottom = styled.form`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: #1ED390;
  margin-left: 15px;
  text-decoration: none;
`;
