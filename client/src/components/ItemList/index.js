import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import GButton from '../Shared/GreenButton';
import Footer from '../Shared/Footer';
import Item from '../Item';
import {
  List, StyledHeader, StyledBottom, StyledLink, GButtonContainer,
} from './itemlist.style';

class ItemList extends Component {
  state = {
    itemlist: [],
  };

  componentDidMount() {
    axios
      .get('/items')
      .then(({ data }) => this.setState({ itemlist: data.data }))
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
  render() {
    return (
      <React.Fragment>
        <Title />
        <StyledHeader>Your Items</StyledHeader>
        <List>
        <StyledLink type="button" onClick={this.addNewItem}>+ ADD NEW ITEM</StyledLink>
        {this.state.itemlist.map(item => <Item key={item.id} />)}          {this.state.itemlist.map((item, index) => {
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
            <GButton title="EXPORT AS CSV" />
          </GButtonContainer>
          <Footer />
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default ItemList;
