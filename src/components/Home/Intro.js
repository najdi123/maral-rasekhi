import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Intro.css'
import pic14 from "../../images/intro-maral3.gif";

class Intro extends Component {
    render() {
        return (
            <div className="intro2 row">
                <div className="intro-top col-6 col-md-6">
                    <img src={pic14} className="intro-image" alt="maral rasekhi"/>
                </div>



                <div className="container intro-text col-sm-12 col-md-6">
                   <h1 className="intro-bold"> INT  RO</h1>
                   <p className="describe2">
                       An inline hockey player, snowboarder and speed skater, Maral was just a teenager when she first decided to become a pro athlete. At only seventeen, she joined Iran’s national speed skating team and in 2004 became the first Iranian female speed skater to compete abroad. Maral was a member of Iran’s inline hockey team between 2014 to 2016. She has won multiple medals in snowboarding and inline hockey. The multi-medal winner also coaches eager learners
                   </p>

                    <div className="intro-button">
                        <a href="/bio" className="btn btn-white test">Read Biography</a>
                    </div>

                </div>


            </div>
        );
    }
}

export default Intro;
