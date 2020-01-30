import React, { Component } from 'react'; 
import RestyForm from '../components/Form/Form.js';

export default class RESTy extends Component {
  state = {
    url: '', 
    rawJSONBody: '', 
    listItems: []

  }

  handleSubmit = event => {
    this.preventDefault(); 
    this.setState(state => {
      listItems: [...state.listItems, {
        url: state.url, 
        rawJSONBody: state.rawJSONBody
      }]
    }); 
  };

  handleChange = ({ target }) => {
    return this.setState([target.name]: target.value ); 
  };

  render() {
    const { url, rawJSONBody, listItems } = this.state; 

    return (
      <>
        <RestyForm 
          url={url}
          rawJSONBody={rawJSONBody}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        
      </> 
    )
  }



}

