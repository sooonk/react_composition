import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


class Tabcontent extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    };

    static defaultProps = {
        name: "tabname",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quam erat, non semper arcu auctor sit amet. Curabitur scelerisque tortor a condimentum aliquet. Fusce ut enim ac elit rhoncus vestibulum. Sed pharetra augue nec est faucibus, vel elementum diam euismod. Duis vel pellentesque est. Aenean sit amet faucibus turpis. Sed id dui in nibh finibus pellentesque vitae nec massa. Suspendisse non odio felis. Praesent congue magna a lobortis malesuada.Proin posuere aliquam blandit. Maecenas ac lectus lacus. Sed dui lorem, pellentesque vitae purus eget, ornare pharetra est. Proin consectetur ultricies nisl et ullamcorper. Duis varius porta convallis. Sed ullamcorper felis tortor, eget pharetra diam tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan enim odio, sed vulputate libero sodales id. Donec volutpat mi sit amet elit faucibus ullamcorper. Sed sit amet diam vel nisl ultricies vestibulum non eu lacus. Mauris tempor odio sit amet libero venenatis malesuada. Aliquam hendrerit viverra interdum. Aenean ac tincidunt odio. Sed at aliquet mi, nec tincidunt eros. Integer tempor justo porttitor quam ultrices, ac porttitor purus auctor. Maecenas nec mollis magna, eu fringilla odio. Sed sollicitudin vestibulum mi, non tristique sem aliquet in. Proin nec ante tincidunt, consectetur ligula mollis, rutrum metus. Suspendisse justo tortor, vestibulum et justo non, rutrum feugiat nulla. Duis ut pretium orci. Ut a ligula sed ante egestas imperdiet et nec orci. Aenean sed ornare sem.',
    }


  render() {
    return (
      <div className="App">
        
        <div className='tabcontent'>
            {this.props.content}
        </div>
        
      </div>
    );
  }
}

export default Tabcontent;
