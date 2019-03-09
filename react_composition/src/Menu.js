import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <Fragment>
                <nav className='menu'>
                    <Link to="/">Home</Link><br />
                    <Link to="about">O nas</Link><br />
                    <Link to="contact">Kontakt</Link>
                </nav>

            </Fragment>
        );
    }
}

export default Menu;