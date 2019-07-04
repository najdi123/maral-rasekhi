import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Home/Header.css'
import Navbar from "./Navbar";

import one from "../images/media1.png";

class Jumbotron extends Component {
    render() {
        return (
            <div className="header">
                {/*<div className="logo-box">*/}
                {/*<h5 className="logo">*/}
                {/*Maral*/}
                {/*<br/>*/}
                {/*Rasekhi*/}
                {/*</h5>*/}
                {/*</div>*/}
                <Navbar/>


            </div>
        );
    }
}

export default Jumbotron;
