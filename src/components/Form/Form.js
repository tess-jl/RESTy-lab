import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const RestyForm = ({ onSubmit, url, onChange, rawJSONBody, username, password, bearerToken, method }) => (
  <form onSubmit={onSubmit} className={styles.Form}>
    <input type="text" name="url" placeholder="URL" value={url} onChange={onChange}/>

    <div className={styles.RadioButtons}>
      <label htmlFor="GET">GET</label>
      <input type="radio" value="GET" name="method" onChange={onChange} checked={ method === 'GET'} ></input>
      <label htmlFor="POST">POST</label>
      <input type="radio" value="POST" name="method" onChange={onChange} checked={ method === 'POST'} ></input>
      <label htmlFor="PUT">PUT</label>
      <input type="radio" value="PUT" name="method" onChange={onChange} checked={ method === 'PUT'} ></input>
      <label htmlFor="PATCH">PATCH</label>
      <input type="radio" value="PATCH" name="method" onChange={onChange} checked={ method === 'PATCH'} ></input>
      <label htmlFor="DELETE">DELETE</label>
      <input type="radio" value="DELETE" name="method" onChange={onChange} checked={ method === 'DELETE'} ></input>

      <button>Go!</button>
    </div>

    <div className={styles.UserInput}>
      <textarea name="rawJSONBody" placeholder="Raw JSON Body" value={rawJSONBody} onChange={onChange}></textarea>

      <div>
        <button>Headers</button>
        <h3>Basic Authorization</h3>
        <input type="text" name="username" placeholder="Username" value={username} onChange={onChange}/>
        <input type="text" name="password" placeholder="Password" value={password} onChange={onChange}/>
        <h3>Bearer Token</h3>
        <input type="text" name="bearerToken" placeholder="Bearer Token" value={bearerToken} onChange={onChange}/>
      </div>
    </div>

  </form> 
);

RestyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired, 
  url: PropTypes.string.isRequired, 
  rawJSONBody: PropTypes.string.isRequired, 
  username: PropTypes.string.isRequired, 
  password: PropTypes.string.isRequired, 
  bearerToken: PropTypes.string.isRequired, 
  method: PropTypes.string.isRequired
};

export default RestyForm; 
