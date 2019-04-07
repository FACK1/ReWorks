import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import Item from '../Item';
import Spinner from '../Shared/Spinner';

import {
  List,
  StyledHeader,
  GButtonContainer,
  StyledBottom,
  StyledLink,
  StyledCSVLink,
} from './itemlist.style';

class ItemList extends Component {
  state = {
    itemlist: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('/items')
      .then(({ data }) => this.setState({ itemlist: data.data, loading: false }))
      .catch(err => console.log(err));
  }

  goItemDetails = (id, index) => {
    const { history } = this.props;
    const itemDetails = this.state.itemlist[index];
    history.push({ pathname: `/item-details/${id}`, itemDetails });
  };

  addNewItem = () => {
    const { history } = this.props;
    history.push('/upload-photo');
  };

  feedback = () => {
    const { history } = this.props;
    history.push('/feedback');
  };

  render() {
    const reducedData = this.state.itemlist.reduce(
      (acc, element) => {
        acc.itemIds.push(element.itemId);
        acc.sizes.push(element.size);
        acc.urls.push(element.url);
        acc.names.push(element.name);
        acc.types.push(element.type);
        return acc;
      },
      {
        itemIds: [], sizes: [], urls: [], names: [], types: [],
      },
    );
    const headers = [
      { label: 'ItemId', key: 'itemId' },
      { label: 'Size', key: 'size' },
      { label: 'Link', key: 'url' },
      { label: 'Name', key: 'name' },
      { label: 'Type', key: 'type' },
    ];

    return (
      <React.Fragment>
        <Title {...this.props} />
        <StyledHeader>Your Items</StyledHeader>
        <List>
          <StyledLink type="button" onClick={this.addNewItem}>
            + ADD NEW ITEM
          </StyledLink>
          {this.state.loading && <Spinner />}
          {this.state.itemlist.map((item, index) => {
            const {
              itemId, color, type, brand, size, url,
            } = item;
            return (
              <Item
                key={itemId}
                data-name={itemId}
                color={color}
                type={type}
                subtitle1={brand}
                subtitle2={size}
                imageUrl={url}
                onClick={() => this.goItemDetails(itemId, index)}
              />
            );
          })}
        </List>
        <StyledBottom>
          <GButtonContainer>
            <Button onclick={this.feedback} title="GIVE YOUR FEEDBACK" />
            <StyledCSVLink
              data={this.state.itemlist}
              headers={headers}
              filename="item_data.csv"
            >
              EXPORT AS CSV
            </StyledCSVLink>
          <GButtonContainer>
            <Button onClick={this.feedback} title="GIVE YOUR FEEDBACK" />
          </GButtonContainer>
          <Footer />
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default ItemList;
