import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
// import Header from '../components/Header';
import Navbar from "../components/Navbar";
import MediaHeader from '../components/MediaHeader';
import News from '../components/News';
// import Gallery from '../components/Gallery'




class Media extends Component {
    render() {
        return (
            <div>

                <div className="bg">
                    <MediaHeader />
                </div>
                <News/>

            </div>
        );
    }
}

export default Media;
