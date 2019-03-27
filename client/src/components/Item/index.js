import React, { Component } from 'react';

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

class GetDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ItemDiv>
          <ItemContainer>
            <Line />
            <Column>
              <ItemMainData>
                <ItemTitle>Item:</ItemTitle>
                <ItemText>Blue shorts</ItemText>
              </ItemMainData>
              <ItemTags>
                <ItemTag>
                  <ItemSubtitle>Adidas</ItemSubtitle>
                </ItemTag>
                <ItemTag>
                  <ItemSubtitle>M</ItemSubtitle>
                </ItemTag>
              </ItemTags>
            </Column>
            <ItemImage
              src="https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201711/15/00100564901726____1__516x640.jpg"
              alt="your item"
            />
          </ItemContainer>
        </ItemDiv>
      </React.Fragment>
    );
  }
}

export default GetDetails;
