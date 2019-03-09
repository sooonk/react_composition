import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';

class AboutUs extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-container'>
          <Header name="Hello World!" />
          <Menu />
        </div>
        <div className='aboutus'>
        
        About Us
        
        </div>
        
        <div className='footer'>
          <Footer name='Author: Sonia' />
        </div>
      </div>
    );
  }
}

export default AboutUs;
