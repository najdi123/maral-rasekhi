import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './News.css'
import PressNav from "./PressNav";


import one from "../../images/varzesh19-2019.jpg";
import two from "../../images/tehran times2.jpg";
import three from "../../images/wikipedia national team.jpg";
import four from "../../images/tasnim-shahrivar97.jpg";
import five from "../../images/china2017.jpg";
import six from "../../images/wiki-maral.jpg";
import seven from "../../images/press tv.jpg";
import eight from "../../images/varzesh3.jpg";
import nine from "../../images/mehr news.jpg";
import ten from "../../images/bbc-19.jpg";


class News extends Component {
    render() {
        return (
            <div className="News">
                <PressNav/>
                <div className="row">

                    <div className="col-12 col-md-6 news-article" id="news">
                        <a href="http://thetehrantimes.com/contemporary-woman-maral-rasekhi/">
                            <img className="news-image" src={two} alt="Iran Asian games" />
                        </a>
                    </div>

                    <div className="col-12 col-md-6 news-article" id="snowboard">
                        <a href="https://en.m.wikipedia.org/wiki/Iran_women%27s_national_inline_hockey_team">
                            <img className="news-image" src={three} alt="Iran Asian games" />
                        </a>
                    </div>


                    <div className="col-12 col-md-6 news-article">
                        <a href="https://www.presstv.com/detail/2016/10/26/490796/iran-women-inline-hockey-team-asian-roller-skating-championships-china">
                            <img className="news-image" src={seven} alt="Iran Asian games" />
                        </a>
                    </div>
                    {/*wiki links*/}

                    <div className="col-12 col-md-6 news-article">
                        <a href="https://fa.wikipedia.org/wiki/%D9%85%D8%A7%D8%B1%D8%A7%D9%84_%D8%B1%D8%A7%D8%B3%D8%AE%DB%8C">
                            <img className="news-image" src={six} alt="Iran Asian games" />
                        </a>
                    </div>
                    <div className="col-12 col-md-6 news-article">
                        <a href="https://en.mehrnews.com/news/137741/Iranian-roller-hockey-skaters-claim-Asian-championship">
                            <img className="news-image" src={nine} alt="Iran Asian games" />
                        </a>
                    </div>

                    <div className="col-12 col-md-6 news-article " id="national-games">
                        <a href="https://en.m.wikipedia.org/wiki/Iran_women%27s_national_inline_hockey_team">
                            <img className="news-image" src={five} alt="Iran Asian games" />
                        </a>
                    </div>
                    <div className="col-12 col-md-6 news-article">
                        <a href="http://thetehrantimes.com/contemporary-woman-maral-rasekhi/">
                            <img className="news-image" src={one} alt="Iran Asian games" />
                        </a>
                    </div>


                    <div className="col-12 col-md-6 news-article">
                        <a href="http://thetehrantimes.com/contemporary-woman-maral-rasekhi/">
                            <img className="news-image" src={ten} alt="Iran Asian games" />
                        </a>
                    </div>

                    <div className="col-12 col-md-6 news-article" id="tornament">
                        <a href="https://www.tasnimnews.com/fa/news/1397/06/22/1827417/%D8%A7%DB%8C%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D9%87%D8%A7%DA%A9%DB%8C-%D9%82%D9%87%D8%B1%D9%85%D8%A7%D9%86%DB%8C-%D8%A2%D8%B3%DB%8C%D8%A7-%D8%AA%DB%8C%D9%85-%D8%A8%D8%A7%D9%86%D9%88%D8%A7%D9%86-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%A8%D9%87-%D9%85%D9%82%D8%A7%D9%85-%D8%B3%D9%88%D9%85-%D8%A8%D8%B3%D9%86%D8%AF%D9%87-%DA%A9%D8%B1%D8%AF">
                            <img className="news-image" src={four} alt="Iran Asian games" />
                        </a>

                    </div>


                    <div className="col-12 col-md-6 news-article" id="hockey">
                        <a href="https://www.varzesh3.com/news/1552937/%D9%82%D8%B7%D8%B9%DB%8C-%D8%B4%D8%AF%D9%86-%D9%85%D8%AF%D8%A7%D9%84-%D8%A8%D8%B1%D9%86%D8%B2-%D8%AF%D8%AE%D8%AA%D8%B1%D8%A7%D9%86-%D8%A7%DB%8C%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D9%87%D8%A7%DA%A9%DB%8C">
                            <img className="news-image" src={eight} alt="Iran Asian games" />
                        </a>
                    </div>



                </div>
            </div>
        );
    }
}

export default News;
