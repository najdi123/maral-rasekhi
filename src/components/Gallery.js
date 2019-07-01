import React, { Component } from 'react';


import './LightBox.css';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

import pic1 from "../images/maral/img (1).JPG";
import pic2 from "../images/maral/img (2).JPG";
import pic3 from "../images/maral/img (3).JPG";
import pic4 from "../images/maral/img (4).JPG";
import pic5 from "../images/maral/img (5).JPG";
import pic6 from "../images/maral/img (6).JPG";
import pic7 from "../images/maral/img (7).JPG";
import pic8 from "../images/maral/img (8).JPG";
import pic9 from "../images/maral/img (9).JPG";
import pic10 from "../images/maral/img (10).JPG";
import pic11 from "../images/maral/img (11).JPG";
import pic12 from "../images/maral/img (12).JPG";
import pic13 from "../images/maral/img (13).JPG";
import pic14 from "../images/maral/img (14).JPG";
import pic15 from "../images/maral/img (15).JPG";
import pic16 from "../images/maral/img (16).JPG";
import pic17 from "../images/maral/img (17).JPG";
import pic18 from "../images/maral/img (18).JPG";
import pic19 from "../images/maral/img (19).JPG";
import pic20 from "../images/maral/img (20).JPG";
import pic21 from "../images/maral/img (21).JPG";
import pic22 from "../images/maral/img (22).JPG";
import pic23 from "../images/maral/img (23).JPG";
import pic24 from "../images/maral/img (24).JPG";
import pic25 from "../images/maral/img (25).JPG";

import pic26 from "../images/maral/img (1).HEIC";
import pic27 from "../images/maral/img (2).HEIC";
import pic28 from "../images/maral/img (1).PNG";
import pic29 from "../images/maral/img (3).HEIC";
import pic30 from "../images/maral/img (4).HEIC";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30];




class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>




                {!isOpen &&
                <div className="image-display">

                    <img src={pic1} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img src={pic2} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img src={pic3} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
                    <img src={pic4} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />

                    <img src={pic5} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img src={pic6} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
                    <img src={pic7} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    <img src={pic8} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img src={pic9} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
                    <img src={pic10} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img src={pic11} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img src={pic12} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
                    <img src={pic13} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
                    <img src={pic14} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
                    <img src={pic15} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:14 })} />
                    <img src={pic16} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:15 })} />
                    <img src={pic17} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:16 })} />
                    <img src={pic18} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:17 })} />
                    <img src={pic19} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:18 })} />
                    <img src={pic20} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:19 })} />
                    <img src={pic21} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:20 })} />
                    <img src={pic22} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:21 })} />
                    <img src={pic23} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:22 })} />
                    <img src={pic24} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:23 })} />
                    <img src={pic25} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:24 })} />

                    <img src={pic26} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:25 })} />
                    <img src={pic27} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:26 })} />
                    <img src={pic28} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:27 })} />
                    <img src={pic29} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:28 })} />
                    <img src={pic30} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:29 })} />




                </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

            </div>
        );
    }
}

export default Bio;
