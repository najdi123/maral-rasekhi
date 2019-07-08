


import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Bio from './pages/Bio';
import Press from './pages/Press';

import './App.css';

const App = () => {
    return (
        <Router>
            <Fragment>

                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home} />


                        <Route path="/bio" component={Bio}/>
                        <Route path="/press" component={Press}/>

                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </Fragment>
        </Router>
    );
};

export default App;
