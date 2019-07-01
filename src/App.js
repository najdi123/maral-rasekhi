import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import Bio from './pages/Bio';
import Press from './pages/Press';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>

                    <Route path="/bio" component={Bio}/>
                    <Route path="/press" component={Press}/>

                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/contact" component={Contact}/>

                </div>
            </Router>
        );
    }
}

export default App;
