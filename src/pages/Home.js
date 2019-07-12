import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
// import Navbar from '../components/Navbar';
import Header from '../components/Home/Header';
import Jumbotron from '../components/Home/Jumbotron.jsx';
import Intro from '../components/Home/Intro.js';
import Xp from '../components/Home/Xp.js';
import Snow from '../components/Home/Snow.js';
import NextComponent from '../components/Home/NextComponent.js';
// import Gallery from '../components/Gallery'
import "./Home.css";




class Home extends Component {
    render() {
        return (
            <div >
                <Header/>
                <Jumbotron/>
                <Intro/>
                <Xp/>
                <Snow/>
                <NextComponent/>
            </div>
        );
    }
}

export default Home;
