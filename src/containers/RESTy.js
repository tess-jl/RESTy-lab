import React, { Component } from 'react'; 
import RestyForm from '../components/Form/Form.js';
import List from '../components/List/List.js';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Result from '../components/Result/Result.js';
import { fetchWithError } from '../services/fetchWithError.js'; 
import styles from './RESTy.css';


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

    return fetchWithError(this.state.url, this.state.method, this.state.rawJSONBody, this.state.bearerToken)
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
        <main className={styles.Main}>
          <div>
            <List 
              list={list}
              onClick={this.handleClick}
            />
          </div>


          <div className={styles.Right}>
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
          </div>

        </main>

        <Footer />
      </> 
    );
  }
}

