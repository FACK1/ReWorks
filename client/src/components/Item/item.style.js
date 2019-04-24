import styled from 'styled-components';

export const ItemContainer = styled.div`
  box-shadow: 1px 2px 2px rgba(195, 184, 184, 0.25);
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const ItemDiv = styled.div`
  margin-top: 20px;
  display: flex;
  width:100%;
  justify-content: center;
  @media (min-width: 650px) {
    width:45%;
    margin:20px auto;
  }
}`;

export const ItemImage = styled.img`
  height: 100px;
  width: 30%;
  @media (min-width: 650px) {
    width: 25%;
  }
}`;

export const Line = styled.div`
  height: 100px;
  width: 5px;
  background-color: #1ed390;
  margin-right: 10px;
  @media (min-width: 650px) {
    width: 10px;
  }
`;

export const ItemTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
`;
export const ItemText = styled.p`
  margin-left: 3px;
  font-size: 14px;
  color: #4c5268;
`;

export const ItemMainData = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const ItemSubtitle = styled.p`
  font-size: 12px;
  color: #000000;
`;

export const ItemTag = styled.div`
  width: 40%;
  height: 30px;
  background-color: #f3fdf9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  width: 100%;
`;
export const ItemTags = styled.div`
  display: flex;
  width: 100%;
`;
