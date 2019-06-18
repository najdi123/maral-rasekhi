import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <div className="intro flex-container">
                <div className="intro-top">
                    <img src={require("../images/02-intro@2x.png")} className="intro-image" alt="maral rasekhi"/>
                </div>



                <div className="container intro-text">
                   <h1 className="intro-bold"> INT  RO</h1>
                   <p className="describe">
                            Shaun has amassed numerous titles and victories, most notably 3 Winter Olympic gold medals in 2006, 2010 and 2018 where he earned the 100th gold medal. He is the only athlete with two perfect 100 scores. He holds the X Games records for gold medals with 15 and the highest overall medal count with 23 to date. He also has won 11 ESPY awards for Best Male Action Sports Athlete and Best Male US Olympic Athlete.
                   </p>

                    <div className="intro-button">
                        <a href="#" className="btn btn-white test">Read Biography</a>
                    </div>

                </div>


            </div>
        );
    }
}

export default Intro;
