import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Bio from './pages/Bio';
import Media from './pages/Media';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>

                    <Route path="/bio" component={Bio}/>
                    <Route path="/media" component={Media}/>

                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>

                </div>
            </Router>
        );
    }
}

export default App;
