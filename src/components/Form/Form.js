import React from 'react';
import PropTypes from 'prop-types';

const restyForm = ({ onSubmit, url, onChange, rawJSONBody }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="url" placeholder="url" value={url} onChange={onChange}/>
    
    <textarea name="rawJSONBody" value={rawJSONBody} onChange={onChange}></textarea>



  </form> 
);

restyForm.PropTypes = {

};

export default restyForm; 

  //  /* <RadioButton />  *