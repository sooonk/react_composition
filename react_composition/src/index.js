import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './Contact';
import AboutUs from './AboutUs';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={Contact} />


        </div>
    </BrowserRouter>,
    document.getElementById('root'));




serviceWorker.unregister();