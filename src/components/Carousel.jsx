import React, { Component } from 'react';

import './Carousel.css';



import pic1 from "../images/maral/1.gif";
import pic2 from "../images/maral/2.gif";
import pic3 from "../images/maral/3.gif";
import pic4 from "../images/maral/4.gif";
import pic5 from "../images/maral/5.gif";
import pic6 from "../images/maral/6.gif";

import Navbar from "./Navbar";


class Carousel extends Component {
    render() {
        return (


            <div className="carousel-holder">



                <div id="carousel" className="carousel carousel-fade" data-ride="carousel" data-interval="1900">
                    <Navbar/>

                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                        <li data-target="#carousel" data-slide-to="3"></li>
                        <li data-target="#carousel" data-slide-to="4"></li>
                        <li data-target="#carousel" data-slide-to="5"></li>
                        <li data-target="#carousel" data-slide-to="6"></li>


                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <picture>
                                <img src={pic1} alt="responsive image" className="d-block img-fluid"/>
                            </picture>


                        </div>

                        <div className="carousel-item">
                            <picture>
                                <img src={pic2} alt="responsive image" className="d-block img-fluid"/>
                            </picture>

                        </div>

                        <div className="carousel-item">
                            <picture>
                                <img src={pic3} alt="responsive image" className="d-block img-fluid"/>
                            </picture>


                        </div>

                        <div className="carousel-item">

                            <picture>
                                <img src={pic4} alt="responsive image" className="d-block img-fluid"/>
                            </picture>


                        </div>
                        <div className="carousel-item">

                            <picture>
                                <img src={pic5} alt="responsive image" className="d-block img-fluid"/>
                            </picture>


                        </div>
                        <div className="carousel-item">

                            <picture>
                                <img src={pic6} alt="responsive image" className="d-block img-fluid"/>
                            </picture>


                        </div>


                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>


                </div>

            </div>
















    );
    }
}

export default Carousel;
