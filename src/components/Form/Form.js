import React from 'react';
import PropTypes from 'prop-types';

const restyForm = ({ onSubmit, url, onChange, rawJSONBody }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="url" placeholder="url" value={url} onChange={onChange}/>

    <label htmlFor="getMethod">GET</label>
    <input type="radio" id="getMethod" name="method" onChange={onChange}></input>
    <label htmlFor="postMethod">POST</label>
    <input type="radio" id="postMethod" name="method" onChange={onChange}></input>
    <label htmlFor="putMethod">PUT</label>
    <input type="radio" id="putMethod" name="method" onChange={onChange}></input>
    <label htmlFor="patchMethod">PATCH</label>
    <input type="radio" id="patchMethod" name="method" onChange={onChange}></input>
    <label htmlFor="deleteMethod">DELETE</label>
    <input type="radio" id="deleteMethod" name="method" onChange={onChange}></input>
    
    <textarea name="rawJSONBody" value={rawJSONBody} onChange={onChange}></textarea>

    <button>Go!</button>



  </form> 
);

restyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired, 
  url: PropTypes.string.isRequired, 
  rawJSONBody: PropTypes.string.isRequired
};

export default restyForm; 
