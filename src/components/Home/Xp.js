import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './Xp.css'

class Xp extends Component {
    render() {
        return (
            <div className="xp row">
                <div className=" col-md-1 ">

                </div>
                <div className="col-12 col-sm-3 col-md-2 ">
                    <div className="number">
                        <h1>3</h1>

                     </div>
                    <div className="title">
                        <h5>OLYMPIC GOLD MEDALS</h5>
                    </div>
                </div>

                <div className="col-12 col-sm-3 col-md-2">
                    <div className="number">
                        <h1>10</h1>
                    </div>
                    <div className="title">
                        <h5>EPSY AWARDS</h5>
                    </div>
                </div>

                <div className="col-12 col-sm-3 col-md-2">
                <div className="number">
                    <h1>23</h1>
                </div>
                <div className="title">
                    <h5>X GAMES</h5>
                </div>
                </div>

                <div className="col-12 col-sm-3 col-md-2">
                <div className="number">
                    <h1>2</h1>
                </div>
                <div className="title">
                    <h5>AIR + STYLE</h5>
                </div>
                </div>

                <div className="col-12 col-sm-3 col-md-2">
                <div className="xp-number">
                    <h1>10</h1>
                </div>
                <div className="xp-title">
                    <h5>US OPEN</h5>
                </div>
                </div>

            </div>
        );
    }
}

export default Xp;
