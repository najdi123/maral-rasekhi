import React, { Component } from 'react';

import './Carousel.css';


import pic1 from "../images/carousel/Maral Rasekhi 1.jpg";
import pic2 from "../images/carousel/Maral Rasekhi 2.jpg";
import pic3 from "../images/carousel/Maral Rasekhi 3.jpg";
import pic4 from "../images/carousel/Maral Rasekhi 4.jpg";
import pic5 from "../images/carousel/Maral Rasekhi 5.jpg";
import pic6 from "../images/carousel/Maral Rasekhi 6.jpg";


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




                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <picture>
                                <img src={pic1} alt="responsive image" className="d-block img-fluid" alt="Maral Rasekhi bronze medal 2016 in Lishui, China"/>
                            </picture>


                        </div>

                        <div className="carousel-item">
                            <picture>
                                <img src={pic2} alt="responsive image" className="d-block img-fluid" alt="Maral Rasekhi bronze medal 2018 in Namwon, South Korea"/>
                            </picture>

                        </div>

                        <div className="carousel-item">
                            <picture>
                                <img src={pic3} alt="responsive image" className="d-block img-fluid" alt="Maral Rasekhi 2018 snow board champions"/>
                            </picture>


                        </div>

                        <div className="carousel-item">

                            <picture>
                                <img src={pic4} alt="responsive image" className="d-block img-fluid" alt="Maral Rasekhi gold medal 2019 snow board freestyle"/>
                            </picture>


                        </div>
                        <div className="carousel-item">

                            <picture>
                                <img src={pic5} alt="responsive image" className="d-block img-fluid" alt="Maral Rasekhi"/>
                            </picture>


                        </div>
                        <div className="carousel-item">

                            <picture>
                                <img src={pic6} alt="responsive image" className="d-block img-fluid" alt="Maral Rasekhi Abu dhabi"/>
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
