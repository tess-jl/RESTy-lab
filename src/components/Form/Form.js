import React from 'react';
import PropTypes from 'prop-types';

const restyForm = ({ onSubmit, url, onChange, rawJSONBody, username, password, bearerToken }) => (
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

    <button>Go!</button>
    
    <textarea name="rawJSONBody" placeholder="Raw JSON Body" value={rawJSONBody} onChange={onChange}></textarea>

    <button>Headers</button>
    <h2>Basic Authorization</h2>
    <input type="text" name="username" placeholder="Username" value={username} onChange={onChange}/>
    <input type="text" name="password" placeholder="Password" value={password} onChange={onChange}/>
    <h2>Bearer Token</h2>
    <input type="text" name="bearerToken" placeholder="Bearer Token" value={bearerToken} onChange={onChange}/>

  </form> 
);

restyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired, 
  url: PropTypes.string.isRequired, 
  rawJSONBody: PropTypes.string.isRequired, 
  username: PropTypes.string.isRequired, 
  password: PropTypes.string.isRequired, 
  bearerToken: PropTypes.string.isRequired
};

export default restyForm; 
