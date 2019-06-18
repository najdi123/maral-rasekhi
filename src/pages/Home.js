import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron.jsx';
import Intro from '../components/Intro.js';
// import Gallery from '../components/Gallery'
import "./Home.css";




class Home extends Component {
    render() {
        return (
            <div >
                <Header/>
                <Jumbotron/>
                <Intro/>

            </div>
        );
    }
}

export default Home;
