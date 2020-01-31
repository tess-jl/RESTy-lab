import React, { Component } from 'react'; 
import RestyForm from '../components/Form/Form.js';
import List from '../components/List/List.js';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';

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

 


  handleSubmit = event => {
    event.preventDefault(); 

    this.setState(state => ({
      list: [...state.list, {
        url: state.url, 
        rawJSONBody: state.rawJSONBody, 
        username: state.username, 
        password: state.password, 
        bearerToken: state.bearerToken, 
        method: state.method
      }]
    })); 

    fetch(this.state.url)
    //parce json
      .then(res => res.json())
      //
      .then(res => res.setState({ }))
  };

  handleChange = ({ target }) => {
    if(target.type === 'radio') {
      this.setState({ [target.name]: target.id });
    }
    else {
      this.setState({ [target.name]: target.value });
    }
  };

  render() {
    const { url, rawJSONBody, username, password, bearerToken, list } = this.state; 

    return (
      <>
        <Header />
        <RestyForm 
          url={url}
          rawJSONBody={rawJSONBody}
          username={username}
          password={password}
          bearerToken={bearerToken}
  
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />

        <List 
          list={list}
        />

        <Footer />
      </> 
    );
  }
}

{/* <List list={list} /> */}

