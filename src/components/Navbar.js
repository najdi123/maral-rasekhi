import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Navbar.css';



class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <div className="nav">
                    <label htmlFor="toggle"> &#9776; </label>
                    <input type="checkbox" id="toggle"/>
                    <div className="menu">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>

                    </div>
                </div>
            </div>


        );
    }
}

export default Navbar;
