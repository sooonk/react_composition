import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Tabcontent from './Tabcontent';
import Tabtitle from './Tabtitle';






class TabApp extends Component {
  render() {
    return (
      <div className="App">
        
        <div className='header-container'>

          <Header applicationName="Hello World!" version="Tab App"/>
          <Menu />
        </div>
        <div className='tabapp'>
        
        <div className='tabbcontainer'>

            <Tabtitle name='1'/>
            <Tabtitle name='2'/>
            <Tabtitle name='3'/>
         
            
        </div>
        <Tabcontent />
        <Tabcontent />
        <Tabcontent />
        </div>
        <div className='footer'>
          <Footer applicationName='Author: Sonia' />

        </div>
      </div>
    );
  }
}

export default TabApp;
