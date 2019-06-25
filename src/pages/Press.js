import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
// import Header from '../components/Header';
import Navbar from "../components/Navbar";
import PressHeader from '../components/PressHeader';
import News from '../components/Press/News';
// import Gallery from '../components/Gallery'




class Press extends Component {
    render() {
        return (
            <div>

                <div className="bg">
                    <PressHeader />
                </div>
                <News/>

            </div>
        );
    }
}

export default Press;
