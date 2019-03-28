import React, { Component } from 'react';
import Title from '../Shared/Title';
import GButton from '../Shared/GreenButton';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Item from '../Item';
import {List, StyledHeader} from './itemlist.style.js';


class ItemList extends Component {
  state = {
    items: [],
  };

  copmonentDidMount(){
    axios.get(`/item`).then(res => {
      this.setState({items: res.data});
    })
  }


    render(){
      return (
    <React.Fragment>
    <Title />
    <List>
      <StyledHeader title="Your Item"/>
      <Link to="/upload-photo">+ ADD NEW ITEM</Link>
      <Item/>
      <Item/>
      <Item/>
    </List>
    <GButton action="EXPORT AS CSV"></GButton>
        <Footer/>
    </React.Fragment>
  );
}
}
    export default ItemList;
