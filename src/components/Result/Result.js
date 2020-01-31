import React from 'react'; 
import PropTypes from 'prop-types';

const Result = ({ responseBody }) => {
  return (
    <>
      <pre>{responseBody}</pre>
    </>
  );
}; 

Result.propTypes = {
  responseBody: PropTypes.string.isRequired
};

export default Result; 
