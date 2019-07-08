import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar';





class Contact extends Component {
    render() {
        return (
            <div className="container contact">

                <Navbar />

                {/*<iframe*/}
                    {/*src="https://docs.google.com/forms/d/e/1FAIpQLSeFa4Ga-jdOFkuaCVDF_dtKwuXwgDxN9jOw8BgM-O3curDUSg/viewform?embedded=true"*/}
                    {/*width="640" height="861" frameBorder="0" marginHeight="0" marginWidth="0">Loading...*/}
                {/*</iframe>*/}
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeFa4Ga-jdOFkuaCVDF_dtKwuXwgDxN9jOw8BgM-O3curDUSg/viewform?embedded=true"
                    width="350" height="950" frameBorder="0" marginHeight="0" marginWidth="0">Loading...
                </iframe>

            </div>
        );
    }
}

export default Contact;
