import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Navbar.css';
import Carousel from "./Carousel";



class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <div className="nav">
                    <label htmlFor="toggle"> &#9776; </label>
                    <input type="checkbox" id="toggle"/>
                    <div className="menu">
                        <Link to="/">Home</Link>

                        <Link to="/bio">Bio</Link>
                        <Link to="/press">Press</Link>

                        <Link to="/gallery">Gallery</Link>
                        <Link to="/contact">Contact</Link>



                    </div>
                </div>

            </div>


        );
    }
}

export default Navbar;
