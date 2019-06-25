import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './PressNav.css';



class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <div className=" press-nav">
                    {/*<label htmlFor="toggle"> &#9776; </label>*/}
                    <input type="checkbox" id="toggle"/>
                    <div className="nav-menu center">
                        <a href="#tornament">Tournaments</a>
                        <a href="#national-games">National games</a>
                        <a href="#hockey">Hockey</a>
                        <a href="#snowboard">Snowboard</a>
                        <a href="#news">in the News</a>
                    </div>
                </div>
            </div>


        );
    }
}

export default Navbar;

