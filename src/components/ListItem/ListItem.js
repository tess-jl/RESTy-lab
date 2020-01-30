import React from 'react';
import PropTypes from 'prop-types';


const ListItem = ({ listItem }) => {
  const listItems = listItems.map((item, i) => (
    <li key={i}>
      <ListItem listItem={listItem} />
    </li>
  ));

}; 

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired
};

export default ListItem; 
