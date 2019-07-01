import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
// import Header from '../components/Header';
import Navbar from "../components/Navbar";
// import Jumbotron from '../components/Jumbotron.jsx';
import Gallery from '../components/Gallery'
import Carousel from "../components/Carousel";




class Home extends Component {
    render() {
        return (
            <div>


                    <Navbar />
                <Carousel/>

                <Gallery/>

            </div>
        );
    }
}

export default Home;
