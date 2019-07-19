import React, { Component } from 'react';
import './Footer.css';




class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-padding">

                    <a href="https://www.facebook.com/maral.rasekhi">
                        <img className="sw2 sw4" src={require("../images/facebook-logo.png")} alt="Facebook" data-lazy-loaded="true" />
                        <noscript><img src={require("../images/facebook-logo.png")} alt="Facebook" /></noscript>
                    </a>&nbsp;&nbsp;&nbsp;
                    <a href="https://twitter.com/maral1365">
                        <img className="sw2 sw4" src={require("../images/twitter-logo-on-black-background.png")} alt="Twitter" data-lazy-loaded="true" />
                        <noscript><img src={require("../images/twitter-logo-on-black-background.png")} alt="Twitter" />
                        </noscript></a>&nbsp;&nbsp;&nbsp;
                    <a href="https://www.instagram.com/maralrasekhi/">
                        <img
                            src={require("../images/instagram-logo.png")} alt="Instagram" data-lazy-loaded="true"
                            className="sw2 sw4" />
                        <noscript><img src="../images/instagram-logo.png" alt="Instagram" />
                        </noscript></a>&nbsp;&nbsp;&nbsp;
                    {/*<a href="https://www.youtube.com/user/shaunwhite">*/}
                        {/*<img*/}
                            {/*src={require("../images/yt.svg")} alt="Youtube" data-lazy-loaded="true"*/}
                            {/*className="sw2" />*/}
                        {/*<noscript><img src="../images/yt.svg" alt="Youtube" /></noscript></a>*/}


                    <span className="text-muted">Maral Rasekhi &#169; {new Date().getFullYear()}    </span>

                </div>

            </footer>

        );
    }
}

export default Footer;
