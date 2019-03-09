import React, {Component , Fragment} from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {

    static propTypes = {
        applicationName: PropTypes.string.isRequired,
    };

    static defaultProps = {
        applicationName: "example application name",
        version:"Version 1"
    }

    state = {
        isFixed: false
    };

    componentDidMount(){
        window.addEventListener('scroll',this.handleHeaderPosition);
    }

    handleHeaderPosition = () => {
        if(window.scrollY > 200 && !this.state.isFixed){
            this.setState({isFixed: true});
        }else if(window.scrollY <= 200 && this.state.isFixed){
            this.setState({isFixed: false});
        }

    };


    render() {
        return <div className={this.state.isFixed ? 'header-fixed' : 'header'}>
                    <h1>{this.props.applicationName} {this.props.version}</h1>
                </div>
        
    }
}

export default Header;