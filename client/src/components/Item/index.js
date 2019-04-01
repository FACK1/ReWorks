import React from 'react';

import {
  ItemContainer,
  ItemDiv,
  ItemImage,
  Line,
  ItemTitle,
  ItemText,
  ItemMainData,
  ItemSubtitle,
  ItemTag,
  Column,
  ItemTags,
} from './item.style';

const Item = ({
  color, type, imageUrl, subtitle1, subtitle2, onClick,
}) => (
  <ItemDiv>
    <ItemContainer onClick={onClick}>
      <Line />
      <Column>
        <ItemMainData>
          <ItemTitle>Item:</ItemTitle>
          <ItemText>
            {color}
            {' '}
            {type}
          </ItemText>
        </ItemMainData>
        <ItemTags>
          <ItemTag>
            <ItemSubtitle>{subtitle1}</ItemSubtitle>
          </ItemTag>
          <ItemTag>
            <ItemSubtitle>{subtitle2}</ItemSubtitle>
          </ItemTag>
        </ItemTags>
      </Column>
      <ItemImage src={imageUrl} alt="your item" />
    </ItemContainer>
  </ItemDiv>
);

export default Item;
