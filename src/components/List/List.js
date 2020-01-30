import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem.js';

const List = ({ listItem }) => {
  const list = list.map((item, i) => (
    <li key={i}>
      <ListItem listItem={listItem} />
    </li>
  ));

}; 

List.propTypes = {
  listItem: PropTypes.object.isRequired
};

export default List; 
