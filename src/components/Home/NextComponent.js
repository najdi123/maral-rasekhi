import React, {Component} from 'react';

// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './NextComponent.css'

import one from "../../images/Maral Rasekhi C1.gif";
import two from "../../images/Maral Rasekhi C2.gif";

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
                    <img src={one} className="next-image-top" alt="Maral Rasekhi snow board freestyle"/>
                </div>

                <div className="next-text">
                    <h1 className="next-text-1">
                        Well I have taken part in several competitions abroad but it was right here in Iran where I obtained one of my all-time greatest achievements. There was a boardercross competition named Darbandsar Grand Prize. Now I’m a freestyler but I took part in the competition anyhow. All my rivals were speed racers so the odds seemed to be against me. But I came in first place and snatched the gold medal and it felt twice as rewarding as other wins
                    </h1>
                </div>
                <div className="next-image-1">
                    <img src={two} className="next-image-top" alt="Maral Rasekhi national hockey player"/>
                </div>







            </div>
        );
    }
}

export default NextComponent;
