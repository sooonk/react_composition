import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        
        <div className='header-container'>

          <Header name="Hello World!" />
          <Menu />
        </div>
        <div className='contact'>
        
        Contact
        
        </div>
        
        <div className='footer'>
          <Footer name='Author: Sonia' />

        </div>
      </div>
    );
  }
}

export default Contact;
