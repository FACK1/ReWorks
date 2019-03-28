import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import GButton from '../Shared/GreenButton';
import Footer from '../Shared/Footer';
import Item from '../Item';
import { List, StyledHeader, StyledBottom, StyledLink } from './itemlist.style';

class ItemList extends Component {
  state = {
    itemlist: [],
  };

  componentDidMount() {
    axios.get('/items')
      .then(res => this.setState({itemlist: res.data.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <List>
          <StyledHeader title="Your Item" />
          <StyledLink to="/upload-photo">+ ADD NEW ITEM</StyledLink>
          {this.state.itemlist.map(item => <Item key={item.id} />)}
        </List>
        <StyledBottom>
          <GButton title="EXPORT AS CSV" />
          <Footer />
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default ItemList;
