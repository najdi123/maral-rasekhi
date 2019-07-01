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

import pic26 from "../images/maral/img (26).JPG";
import pic27 from "../images/maral/img (27).JPG";
import pic28 from "../images/maral/img (28).JPG";
import pic29 from "../images/maral/img (29).JPG";
import pic30 from "../images/maral/img (30).JPG";
import pic31 from "../images/maral/img (31).JPG";
import pic32 from "../images/maral/img (32).JPG";
import pic33 from "../images/maral/img (33).JPG";
import pic34 from "../images/maral/img (34).JPG";
import pic35 from "../images/maral/img (35).JPG";
import pic36 from "../images/maral/img (36).JPG";
import pic37 from "../images/maral/img (37).JPG";
import pic38 from "../images/maral/img (38).JPG";
import pic39 from "../images/maral/img (39).JPG";
import pic40 from "../images/maral/img (40).JPG";
import pic41 from "../images/maral/img (41).JPG";
import pic42 from "../images/maral/img (42).JPG";
import pic43 from "../images/maral/img (43).JPG";
import pic44 from "../images/maral/img (44).JPG";
import pic45 from "../images/maral/img (45).JPG";
import pic46 from "../images/maral/img (46).JPG";
import pic47 from "../images/maral/img (47).JPG";
import pic48 from "../images/maral/img (48).JPG";
import pic49 from "../images/maral/img (49).JPG";
import pic50 from "../images/maral/img (50).JPG";
import pic51 from "../images/maral/img (51).JPG";
import pic52 from "../images/maral/img (52).JPG";
import pic53 from "../images/maral/img (53).JPG";
import pic54 from "../images/maral/img (54).JPG";
import pic55 from "../images/maral/img (55).jpg";
import pic56 from "../images/maral/img (56).jpg";
import pic57 from "../images/maral/img (57).jpg";

import pic58 from "../images/maral/img (1).HEIC";
import pic59 from "../images/maral/img (2).HEIC";
import pic60 from "../images/maral/img (1).PNG";
import pic61 from "../images/maral/img (3).HEIC";
import pic62 from "../images/maral/img (4).HEIC";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30,
             pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39, pic40, pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50, pic51, pic52, pic53, pic54, pic55, pic56, pic57, pic58, pic9, pic60,
             pic61, pic62];




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

                    <img src={pic31} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:30 })} />
                    <img src={pic32} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:31 })} />
                    <img src={pic33} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:32 })} />
                    <img src={pic34} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:33 })} />
                    <img src={pic35} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:34 })} />
                    <img src={pic36} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:35 })} />
                    <img src={pic37} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:36 })} />
                    <img src={pic38} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:37 })} />
                    <img src={pic39} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:38 })} />
                    <img src={pic40} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:93 })} />
                    <img src={pic41} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:40 })} />
                    <img src={pic42} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:41 })} />
                    <img src={pic43} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:42 })} />
                    <img src={pic44} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:43 })} />
                    <img src={pic45} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:44 })} />
                    <img src={pic46} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:45 })} />
                    <img src={pic47} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:46 })} />
                    <img src={pic48} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:47 })} />
                    <img src={pic49} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:48 })} />
                    <img src={pic50} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:49 })} />
                    <img src={pic51} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:50 })} />
                    <img src={pic52} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:51 })} />
                    <img src={pic53} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:52 })} />
                    <img src={pic54} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:53 })} />
                    <img src={pic55} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:54 })} />
                    <img src={pic56} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:55 })} />
                    <img src={pic57} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:56 })} />
                    <img src={pic58} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:57 })} />
                    <img src={pic59} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:58 })} />
                    <img src={pic60} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:59 })} />
                    <img src={pic61} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:60 })} />
                    <img src={pic62} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:61 })} />




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
