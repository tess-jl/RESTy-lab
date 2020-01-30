import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ listItem }) => (
  <section>
    <h3>{listItem.method}</h3>
    <p>{listItem.url}</p>
  </section>
);
  
ListItem.propTypes = {
  listItem: PropTypes.shape({
    url: PropTypes.string.isRequired, 
    rawJSONBody: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired, 
    password: PropTypes.string.isRequired, 
    bearerToken: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  }).isRequired
};

export default ListItem; 
