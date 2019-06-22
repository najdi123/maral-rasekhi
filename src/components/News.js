import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './News.css'


import one from "../images/media1.png";

class News extends Component {
    render() {
        return (
            <div className="News">
                <div className="row">
                    <div className="col-12 col-md-6 news-article">

                        <h2>Asian Games 20**</h2>
                        <img className="news-image" src={one} alt="Iran Asian games" />

                    </div>
                    <div className="col-12 col-md-6 news-article">
                        <h2>Asian Games 20**</h2>
                        <img className="news-image" src={one} alt="Iran Asian games" />

                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Asian Games 20**</h2>
                        <img className="news-image" src={one} alt="Iran Asian games" />

                    </div>
                </div>
            </div>
        );
    }
}

export default News;
