import React from 'react'; 
import PropTypes from 'prop-types';
import styles from './Result.css';

const Result = ({ responseBody }) => {
  return (
    <section className={styles.Result}>
      <pre>{responseBody}</pre>
    </section>
  );
}; 

Result.propTypes = {
  responseBody: PropTypes.string.isRequired
};

export default Result; 
