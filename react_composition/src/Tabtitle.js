import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


class Tabtitle extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    static defaultProps = {
        name: "tabname",
    }


  render() {
    return (
      <div className="App">
        
        <button className='name'>
            {this.props.name}
        </button>
        
      </div>
    );
  }
}

export default Tabtitle;
