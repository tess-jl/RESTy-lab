import React, { Component } from 'react'; 
import RestyForm from '../components/Form/Form.js';
import List from '../components/List/List.js';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Result from '../components/Result/Result.js';

const methodsWithBody = ['POST', 'PUT', 'PATCH'];

export default class RESTy extends Component {
  state = {
    url: '', 
    rawJSONBody: '', 
    username: '', 
    password: '', 
    bearerToken: '',
    method: '',
    list: [], 
    responseBody: ''
  }

  fetchWithError = () => {
    return fetch(this.state.url, { 
      method: this.state.method,
      headers: methodsWithBody.includes(this.state.method) ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.bearerToken}` } : {},
      body: methodsWithBody.includes(this.state.method) ? this.state.rawJSONBody : null
    })
      .then(res => {
        if(res.ok) return res.json(); 
        throw `Response: ${res.status}`;
      });
  };


  handleSubmit = event => {
    event.preventDefault(); 

    this.fetchWithError()
      .then(res => this.setState(state => ({
        responseBody: JSON.stringify(res, null, 2),
        list: [...state.list, {
          url: state.url, 
          rawJSONBody: state.rawJSONBody, 
          username: state.username, 
          password: state.password, 
          bearerToken: state.bearerToken, 
          method: state.method
        }]
      })))
      .catch(err => console.log(err));
  };

  handleChange = ({ target }) => {
    if(target.type === 'radio') {
      this.setState({ [target.name]: target.value });
    }
    else {
      this.setState({ [target.name]: target.value });
    }
  };

  handleClick = (listItem) => {
    this.setState(() => ({ url: listItem.url, method: listItem.method, rawJSONBody: listItem.rawJSONBody }));
  }; 

  render() {
    const { url, rawJSONBody, username, password, bearerToken, list, responseBody, method } = this.state; 

    return (
      <>
        <Header />
        <RestyForm 
          url={url}
          rawJSONBody={rawJSONBody}
          username={username}
          password={password}
          bearerToken={bearerToken}
          method={method}
  
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />

        <Result responseBody={responseBody}/>

        <List 
          list={list}
          onClick={this.handleClick}
        />

        <Footer />
      </> 
    );
  }
}

