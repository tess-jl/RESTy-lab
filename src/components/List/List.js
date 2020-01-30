import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem.js';

const List = ({ listItem }) => {
  const listItems = listItems.map((item, i) => (
    <li key={i}>
      <ListItem listItem={listItem} />
    </li>
  ));

}; 

List.PropTypes = {
  listItem: PropTypes.object.isRequired
};

export default List; 
