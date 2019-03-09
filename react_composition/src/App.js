import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './Menu.js';
import Header from './Header.js';
import Content from './Content';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header  applicationName='Hello World!'/>
        <Menu />

        <div className='content'><Content /></div>
        <div className='footer'>
          <Footer applicationName='Author: Sonia' />
          
        </div>
      </div>
    );
  }
}

export default App;
