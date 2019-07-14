import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Jumbotron.css'

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">

                        <h6 className="name">

                            <div className="sw-social">
                                <a href="https://www.facebook.com/ShaunWhite/">
                                    <img src={require("../../images/fb.svg")} alt="Facebook" data-lazy-loaded="true" />
                                        <noscript><img src={require("../../images/fb.svg")} alt="Facebook" /></noscript>
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="https://twitter.com/shaunwhite">
                                    <img className="sw2" src={require("../../images/twitter.svg")} alt="Twitter" data-lazy-loaded="true" />
                                        <noscript><img src={require("../../images/twitter.svg")} alt="Twitter" />
                                    </noscript></a>&nbsp;&nbsp;&nbsp;
                                <a href="https://www.instagram.com/maralrasekhi/">
                                    <img
                                        src={require("../../images/ig.svg")} alt="Instagram" data-lazy-loaded="true"
                                        className="sw2" />
                                    <noscript><img src="../../images/ig.svg" alt="Instagram" />
                                    </noscript></a>&nbsp;&nbsp;&nbsp;
                                <a href="https://www.youtube.com/user/shaunwhite">
                                    <img
                                        src={require("../../images/yt.svg")} alt="Youtube" data-lazy-loaded="true"
                                        className="sw2" />
                                    <noscript><img src="../../images/yt.svg" alt="Youtube" /></noscript></a>
                            </div>

                        </h6>


                        <p className="describe">
                            Maral Rasekhi is a dual sport professional athlete who maintains some of the highest accolades within snowboarding and hockey. Maral started skating at age 7 and immediately showed an uncanny talent for the sport. By 10 Maral started skiing and she took on snowboarding at 15.

                        </p>


                </div>
            </div>
        );
    }
}

export default Jumbotron;
