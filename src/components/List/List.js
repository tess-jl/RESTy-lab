import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem.js';

const List = ({ list }) => {
  const listForPresentation = list.map((listItem, i) => (
    <li key={i}>
      <ListItem listItem={listItem} />
    </li>
  ));

  return (
    <>
      <h2>History</h2>
      <ul>
        {listForPresentation}
      </ul>
    </>
  );

}; 

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired, 
    rawJSONBody: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired, 
    password: PropTypes.string.isRequired, 
    bearerToken: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default List; 
