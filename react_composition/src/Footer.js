import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';


class Footer extends React.PureComponent {

   static propTypes = {
        applicationName: PropTypes.string,
    };
    static defaultProps = {
        applicationName: "example application footer",
        comment:"All rights reserved"
    }


    render() {
      //  return <Fragment><footer>{this.props.name}</footer></Fragment>
        return <Fragment><footer>{this.props.applicationName} {this.props.comment} </footer></Fragment>
    }
}

export default Footer;