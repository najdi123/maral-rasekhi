import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Header.css'
// import Navbar from "../Navbar";
import Carousel from "../Carousel";

class Jumbotron extends Component {
    render() {
        return (
            <div className="header">
                <Carousel/>


                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">MARAL</span>
                        <span className="heading-primary-sub">RASEKHI</span>
                    </h1>

                    {/*<a href="#" className="btn btn-white">A Button</a>*/}
                </div>
            </div>
        );
    }
}

export default Jumbotron;
