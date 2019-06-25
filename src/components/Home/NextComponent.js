import React, {Component} from 'react';

// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './NextComponent.css'

import one from "../../images/03-snow-video@2x-1024x587.png";
import two from "../../images/sk-carousel1.png";

class NextComponent extends Component {
    render() {
        return (
            <div className="next">
                <div className="next-text">
                    <h1 className="next-text-1">
                        “EVEN THOUGH I’VE BEEN DOING ALL THIS SINCE I WAS A KID, I FEEL LIKE I’M JUST GETTING STARTED — LIKE I’M JUST NOW GETTING A TRUE GRASP OF WHAT I’M CAPABLE OF.”
                    </h1>
                </div>
                <div className="next-image-1">
                    <img src={one} className="next-image-top" alt=""/>
                </div>

                <div className="next-text">
                    <h1 className="next-text-1">
                        In the decade since, he’s continued to win or medal in practically everything he’s entered across halfpipe, slopestyle, big air, and quarterpipe; built best-selling signature lines for Burton, Oakley, and Target; been the face of a snowboard video game; invented impossibly difficult tricks; scored the only perfect 100 in X Games SuperPipe history.
                    </h1>
                </div>
                <div className="next-image-1">
                    <img src={two} className="next-image-top" alt=""/>
                </div>







            </div>
        );
    }
}

export default NextComponent;
