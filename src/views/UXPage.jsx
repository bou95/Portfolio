import React from "react";
import About from "../components/about/AboutAnimation";
import img1 from "../assets/img/seezitt/1.jpg";
import img2 from "../assets/img/seezitt/2.jpg";
import img3 from "../assets/img/seezitt/3.jpg";
import img4 from "../assets/img/seezitt/4.jpg";
import img5 from "../assets/img/seezitt/5.jpg";
import img6 from "../assets/img/seezitt/6.jpg";
import img7 from "../assets/img/seezitt/7.jpg";
import img8 from "../assets/img/seezitt/8.jpg";
import img9 from "../assets/img/seezitt/9.jpg";
import img10 from "../assets/img/seezitt/web/web1.jpg";
import img11 from "../assets/img/seezitt/web/web2.jpg";
import img12 from "../assets/img/seezitt/web/web3.jpg";
import img13 from "../assets/img/seezitt/web/web4.png";
import img14 from "../assets/img/seezitt/web/web5.png";
import img15 from "../assets/img/seezitt/web/web6.png";
import img16 from "../assets/img/seezitt/web/web7.png";

import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";


const UXPage = () => {

    //GALLERY//
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9
    ];
    const webimages = [
        img10,img11,img12,img13,img14,img15,img16
    ];
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    //
    document.body.classList.add("light");
    return (
        <div>
            <div className="beny_tm_about" id="about">
                <div className="container">
                    <div className="beny_tm_title_holder-portfolio">
                        <span>UX Projects</span>
                        <h2>Seezitt</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                            This projects contained A Mobile App, a WebApp, a Website and an Admin Panel.
                        </p>
                        <br/>
                        <h5>Mobile Snapchots</h5>
                        <br/>
                        <div className="seezitt-scrollmenu">
                            <div>
                                {images.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                    />
                                ))}
                                {isViewerOpen && (
                                    <ImageViewer
                                        src={images}
                                        currentIndex={currentImage}
                                        onClose={closeImageViewer}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>


                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img1} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img2} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img3} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img4} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img5} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img6} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img7} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img8} alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="seezitt-scrollmenu-div">*/}
                            {/*    <img className="seezitt-img" src={img9} alt=""/>*/}
                            {/*</div>*/}
                        </div>
                        <br/>
                        <h5>Web Snapchots</h5>
                        <br/>
                        <div className="seezitt-scrollmenu">
                            <div>
                                {webimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                    />
                                ))}
                                {isViewerOpen && (
                                    <ImageViewer
                                        src={webimages}
                                        currentIndex={currentImage}
                                        onClose={closeImageViewer}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/>


                        <h2>KT Messenger</h2>
                        <p>
                            A Communication Platform. Simple and Secure Communication with Real-time Translation in most of the popular languages. KT Messenger is a messenger app developed to redefine communication. A multilingual, secure and reliable instant messaging service that lets you stay in touch with people worldwide even if you speak a different language. The project contained a Mobile and a Web App.


                        </p>
                        <br/>
                        <h2>OgoulEMS</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>Mizdah</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>OgoulTutor</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>WCT</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>Jambak</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>PoshDetect</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>PoshDubbing</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>PoshTranslate</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                        <br/>
                        <h2>Qatar Airways</h2>
                        <p>
                            A Social Media App. SeezItt lets you dive into creativity to capture spectacular moments and
                            share them with the world. Show your talent, share a joke, or promote your passions around
                            the world with short and immersive videos on SeezItt.
                        </p>
                    </div>
                </div>
            </div>
        </div>

/*
<div>
            {images.map((src, index) => (
                <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="300"
                    key={index}
                    style={{margin: "2px"}}
                    alt=""
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
            )}
        </div>
 */

    );
};

export default UXPage;


