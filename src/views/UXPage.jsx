import React from "react";
import About from "../components/about/AboutAnimation";

//SEEZITT
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

//KT
import img17 from "../assets/img/kt/1.jpg";
import img18 from "../assets/img/kt/2.jpg";
import img19 from "../assets/img/kt/3.jpg";
import img20 from "../assets/img/kt/4.jpg";
import img21 from "../assets/img/kt/5.jpg";
import img22 from "../assets/img/kt/6.jpg";
import img23 from "../assets/img/kt/7.jpg";
import img24 from "../assets/img/kt/8.jpg";
import img25 from "../assets/img/kt/9.jpg";
import img26 from "../assets/img/kt/10.jpg";
import img27 from "../assets/img/kt/11.jpg";
import img28 from "../assets/img/kt/12.jpg";
import img29 from "../assets/img/kt/13.jpg";
import img30 from "../assets/img/kt/web/1.jpg";
import img31 from "../assets/img/kt/web/2.jpg";
import img32 from "../assets/img/kt/web/3.jpg";
import img33 from "../assets/img/kt/web/4.jpg";
import img34 from "../assets/img/kt/web/5.jpg";
import img35 from "../assets/img/kt/web/6.jpg";
import img36 from "../assets/img/kt/web/7.jpg";

//WCT
import img37 from "../assets/img/wct/1.jpg";
import img38 from "../assets/img/wct/2.jpg";
import img39 from "../assets/img/wct/3.jpg";
import img40 from "../assets/img/wct/4.jpg";
import img41 from "../assets/img/wct/5.jpg";
import img42 from "../assets/img/wct/6.jpg";
import img43 from "../assets/img/wct/7.jpg";
import img44 from "../assets/img/wct/8.jpg";
import img45 from "../assets/img/wct/web/1.jpg";
import img46 from "../assets/img/wct/web/2.jpg";
import img47 from "../assets/img/wct/web/3.jpg";
import img48 from "../assets/img/wct/web/4.jpg";
import img49 from "../assets/img/wct/web/5.jpg";
import img50 from "../assets/img/wct/web/6.jpg";

//POSHDUBBING
import img51 from "../assets/img/poshdubbing/1.jpg";
import img52 from "../assets/img/poshdubbing/2.jpg";
import img53 from "../assets/img/poshdubbing/3.jpg";
import img54 from "../assets/img/poshdubbing/4.jpg";
import img55 from "../assets/img/poshdubbing/5.jpg";
import img56 from "../assets/img/poshdubbing/6.jpg";

//POSHDETECT
import img57 from "../assets/img/poshdetect/1.jpg";
import img58 from "../assets/img/poshdetect/2.jpg";
import img59 from "../assets/img/poshdetect/3.jpg";
import img60 from "../assets/img/poshdetect/4.jpg";
import img61 from "../assets/img/poshdetect/5.jpg";
import img62 from "../assets/img/poshdetect/6.jpg";

//JAMBAK
import img63 from "../assets/img/jambak/Step 1.png";
import img64 from "../assets/img/jambak/Step 2.png";
import img65 from "../assets/img/jambak/Step 3.png";
import img66 from "../assets/img/jambak/Step 4.png";

//POSHTRANSLATE
import img67 from "../assets/img/poshtranslate/1.jpg";
import img68 from "../assets/img/poshtranslate/2.jpg";
import img69 from "../assets/img/poshtranslate/3.jpg";
import img70 from "../assets/img/poshtranslate/4.jpg";
import img71 from "../assets/img/poshtranslate/5.jpg";
import img72 from "../assets/img/poshtranslate/6.jpg";
import img73 from "../assets/img/poshtranslate/7.jpg";
import img74 from "../assets/img/poshtranslate/8.jpg";
import img75 from "../assets/img/poshtranslate/9.jpg";
import img76 from "../assets/img/poshtranslate/10.jpg";
import img77 from "../assets/img/poshtranslate/11.jpg";
import img78 from "../assets/img/poshtranslate/12.jpg";
import img79 from "../assets/img/poshtranslate/13.jpg";
import img80 from "../assets/img/poshtranslate/14.jpg";

//OGOULTUTOR
import img81 from "../assets/img/ogoultutor/1.jpg";
import img82 from "../assets/img/ogoultutor/2.jpg";
import img83 from "../assets/img/ogoultutor/3.jpg";
import img84 from "../assets/img/ogoultutor/4.jpg";
import img85 from "../assets/img/ogoultutor/5.jpg";
import img86 from "../assets/img/ogoultutor/6.jpg";
import img87 from "../assets/img/ogoultutor/7.jpg";
import img88 from "../assets/img/ogoultutor/8.jpg";
import img89 from "../assets/img/ogoultutor/9.jpg";
import img90 from "../assets/img/ogoultutor/10.jpg";
import img91 from "../assets/img/ogoultutor/11.jpg";
import img92 from "../assets/img/ogoultutor/12.jpg";
import img93 from "../assets/img/ogoultutor/13.jpg";

import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

//OGOULEMS
import img94 from "../assets/img/ogoulems/1.jpg";
import img95 from "../assets/img/ogoulems/2.jpg";
import img96 from "../assets/img/ogoulems/3.jpg";
import img97 from "../assets/img/ogoulems/4.jpg";
import img98 from "../assets/img/ogoulems/5.jpg";
import img99 from "../assets/img/ogoulems/6.jpg";
import img100 from "../assets/img/ogoulems/7.jpg";
import img101 from "../assets/img/ogoulems/8.jpg";
import img102 from "../assets/img/ogoulems/9.jpg";
import img103 from "../assets/img/ogoulems/10.jpg";
import img104 from "../assets/img/ogoulems/11.jpg";
import img105 from "../assets/img/ogoulems/12.jpg";
import img106 from "../assets/img/ogoulems/13.jpg";
import img107 from "../assets/img/ogoulems/14.jpg";
import img108 from "../assets/img/ogoulems/15.jpg";
import img109 from "../assets/img/ogoulems/16.jpg";
import img110 from "../assets/img/ogoulems/17.jpg";
import img111 from "../assets/img/ogoulems/18.jpg";
import img112 from "../assets/img/ogoulems/19.jpg";
import img113 from "../assets/img/ogoulems/web/1.png";
import img114 from "../assets/img/ogoulems/web/2.png";
import img115 from "../assets/img/ogoulems/web/3.png";
import img116 from "../assets/img/ogoulems/web/4.png";
import img117 from "../assets/img/ogoulems/web/5.png";
import img118 from "../assets/img/ogoulems/web/6.png";
import img119 from "../assets/img/ogoulems/web/7.png";
import img120 from "../assets/img/ogoulems/web/8.png";
import img121 from "../assets/img/ogoulems/web/9.png";
import img122 from "../assets/img/ogoulems/web/10.png";
import img123 from "../assets/img/ogoulems/web/11.png";
import img124 from "../assets/img/ogoulems/web/12.png";
import img125 from "../assets/img/ogoulems/web/13.png";
import img126 from "../assets/img/ogoulems/web/14.png";
import img127 from "../assets/img/ogoulems/web/15.png";
import img128 from "../assets/img/ogoulems/web/16.png";
import img129 from "../assets/img/ogoulems/web/17.png";
import img130 from "../assets/img/ogoulems/web/18.png";
import img131 from "../assets/img/ogoulems/web/19.png";
import img132 from "../assets/img/ogoulems/web/20.png";

const UXPage = () => {

    //GALLERY//
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const [currentImage2, setCurrentImage2] = useState(0);
    const [isViewerOpen2, setIsViewerOpen2] = useState(false);

    const [currentImage3, setCurrentImage3] = useState(0);
    const [isViewerOpen3, setIsViewerOpen3] = useState(false);

    const [currentImage4, setCurrentImage4] = useState(0);
    const [isViewerOpen4, setIsViewerOpen4] = useState(false);

    const [currentImage5, setCurrentImage5] = useState(0);
    const [isViewerOpen5, setIsViewerOpen5] = useState(false);

    const [currentImage6, setCurrentImage6] = useState(0);
    const [isViewerOpen6, setIsViewerOpen6] = useState(false);

    const [currentImage7, setCurrentImage7] = useState(0);
    const [isViewerOpen7, setIsViewerOpen7] = useState(false);

    const [currentImage8, setCurrentImage8] = useState(0);
    const [isViewerOpen8, setIsViewerOpen8] = useState(false);

    const [currentImage9, setCurrentImage9] = useState(0);
    const [isViewerOpen9, setIsViewerOpen9] = useState(false);

    const [currentImage10, setCurrentImage10] = useState(0);
    const [isViewerOpen10, setIsViewerOpen10] = useState(false);

    const [currentImage11, setCurrentImage11] = useState(0);
    const [isViewerOpen11, setIsViewerOpen11] = useState(false);

    const [currentImage12, setCurrentImage12] = useState(0);
    const [isViewerOpen12, setIsViewerOpen12] = useState(false);

    const [currentImage13, setCurrentImage13] = useState(0);
    const [isViewerOpen13, setIsViewerOpen13] = useState(false);

    const images = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9
    ];
    const webimages = [
        img10,img11,img12,img13,img14,img15,img16
    ];
    const ktimages = [
        img17,img18,img19,img20,img21,img22,img23, img24, img25,img26,img27,img28,img29
    ];
    const ktwebimages = [
       img30,img31,img32,img33,img34,img35,img36
    ];
    const wctimages = [
        img37,img38,img39,img40,img41,img42,img43,img44
    ];
    const wctwebimages = [
        img45,img46,img47,img48,img48,img49,img50
    ];
    const poshdubbingimages = [
        img51,img52,img53,img54,img55,img56
    ];
    const poshdetectimages = [
        img57,img58,img59,img60,img61,img62
    ];
    const jambakimages = [
        img63,img64,img65,img66
    ];
    const poshtranslateimages = [
        img67,img68,img69,img70, img71,img72,img73,img74,img75,img76,img77,img78,img79,img80
    ];
    const ogoultutorimages = [
        img81,img82,img83,img84,img85,img86,img87,img88,img89,img90,img91,img92,img93
    ];
    const emsimages = [
        img94,img95,img96,img97,img98,img99,img100,img101,img102,img103,img104,img105,img106,img107,img108,img109,img110,img111,img112
    ];

    const emswebimages = [
        img113,img114,img115,img116,img117,img118,img119,img120,img121,img122,img123,img124,img125,img126,img127,img128,img129,img130,img131,img132
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const openImageViewer2 = useCallback((index) => {
        setCurrentImage2(index);
        setIsViewerOpen2(true);
    }, []);
    const closeImageViewer2 = () => {
        setCurrentImage2(0);
        setIsViewerOpen2(false);
    };

    const openImageViewer3 = useCallback((index) => {
        setCurrentImage3(index);
        setIsViewerOpen3(true);
    }, []);
    const closeImageViewer3 = () => {
        setCurrentImage3(0);
        setIsViewerOpen3(false);
    };

    const openImageViewer4 = useCallback((index) => {
        setCurrentImage4(index);
        setIsViewerOpen4(true);
    }, []);
    const closeImageViewer4 = () => {
        setCurrentImage4(0);
        setIsViewerOpen4(false);
    };

    const openImageViewer5 = useCallback((index) => {
        setCurrentImage5(index);
        setIsViewerOpen5(true);
    }, []);
    const closeImageViewer5 = () => {
        setCurrentImage5(0);
        setIsViewerOpen5(false);
    };

    const openImageViewer6 = useCallback((index) => {
        setCurrentImage6(index);
        setIsViewerOpen6(true);
    }, []);
    const closeImageViewer6 = () => {
        setCurrentImage6(0);
        setIsViewerOpen6(false);
    };

    const openImageViewer7 = useCallback((index) => {
        setCurrentImage7(index);
        setIsViewerOpen7(true);
    }, []);
    const closeImageViewer7 = () => {
        setCurrentImage7(0);
        setIsViewerOpen7(false);
    };

    const openImageViewer8 = useCallback((index) => {
        setCurrentImage8(index);
        setIsViewerOpen8(true);
    }, []);
    const closeImageViewer8 = () => {
        setCurrentImage8(0);
        setIsViewerOpen8(false);
    };

    const openImageViewer9 = useCallback((index) => {
        setCurrentImage9(index);
        setIsViewerOpen9(true);
    }, []);
    const closeImageViewer9 = () => {
        setCurrentImage9(0);
        setIsViewerOpen9(false);
    };

    const openImageViewer10 = useCallback((index) => {
        setCurrentImage10(index);
        setIsViewerOpen10(true);
    }, []);
    const closeImageViewer10 = () => {
        setCurrentImage10(0);
        setIsViewerOpen10(false);
    };

    const openImageViewer11 = useCallback((index) => {
        setCurrentImage11(index);
        setIsViewerOpen11(true);
    }, []);
    const closeImageViewer11 = () => {
        setCurrentImage11(0);
        setIsViewerOpen11(false);
    };

    const openImageViewer12 = useCallback((index) => {
        setCurrentImage12(index);
        setIsViewerOpen12(true);
    }, []);
    const closeImageViewer12 = () => {
        setCurrentImage12(0);
        setIsViewerOpen12(false);
    };

    const openImageViewer13 = useCallback((index) => {
        setCurrentImage13(index);
        setIsViewerOpen13(true);
    }, []);
    const closeImageViewer13 = () => {
        setCurrentImage13(0);
        setIsViewerOpen13(false);
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
                        <h5>Mobile Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '450px'}}>
                                {images.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
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
                        </div>
                        <br/><br/>
                        <h5>Web Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '300px'}}>
                                {webimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer2(index)}
                                        width="400"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen2 && (
                                    <ImageViewer
                                        src={webimages}
                                        currentIndex={currentImage2}
                                        onClose={closeImageViewer2}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>KT Messenger</h2>
                        <p>
                            A Communication Platform. Simple and Secure Communication with Real-time Translation in most
                            of the popular languages. KT Messenger is a messenger app developed to redefine
                            communication. A multilingual, secure and reliable instant messaging service that lets you
                            stay in touch with people worldwide even if you speak a different language. The project
                            contained a Mobile and a Web App.
                        </p>
                        <br/>
                        <h5>Mobile Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '450px'}}>
                                {ktimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer3(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen3 && (
                                    <ImageViewer
                                        src={ktimages}
                                        currentIndex={currentImage3}
                                        onClose={closeImageViewer3}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/>
                        <h5>Web Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top" style={{height: '300px'}}>
                            <div className="align-top" style={{height: '300px'}}>
                                {ktwebimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer4(index)}
                                        width="400"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen4 && (
                                    <ImageViewer
                                        src={ktwebimages}
                                        currentIndex={currentImage4}
                                        onClose={closeImageViewer4}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>WCT</h2>
                        <p>
                            WCT is a news platform for organizations and individuales. Create your channel, upload
                            videos, podcasts and news, let the world know what you are capable of, all in one place,
                            accessing it all with one account.
                        </p>
                        <br/>
                        <h5>Mobile Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '450px'}}>
                                {wctimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer5(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen5 && (
                                    <ImageViewer
                                        src={wctimages}
                                        currentIndex={currentImage5}
                                        onClose={closeImageViewer5}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/>
                        <h5>Web Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top" style={{height: '300px'}}>
                            <div className="align-top" style={{height: '300px'}}>
                                {wctwebimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer6(index)}
                                        width="400"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen6 && (
                                    <ImageViewer
                                        src={wctwebimages}
                                        currentIndex={currentImage6}
                                        onClose={closeImageViewer6}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>PoshDubbing</h2>
                        <p>
                            PoshDubbing is an AI availbale to use on Web. It is an Automatic Dubbing Platform. Make your
                            video available to a broader audience, and garner more clicks and views by automatically
                            dubbing videos in more than 12 languages.
                        </p>
                        <br/>
                        <h5>Web Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top" style={{height: '300px'}}>
                            <div className="align-top" style={{height: '300px'}}>
                                {poshdubbingimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer7(index)}
                                        width="400"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen7 && (
                                    <ImageViewer
                                        src={poshdubbingimages}
                                        currentIndex={currentImage7}
                                        onClose={closeImageViewer7}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>PoshDetect</h2>
                        <p>
                            PoshDetect is an AI tool that detects nudity and violence in images and videos. It also
                            detects offensivness in Text and Documents. The website provides and API for its users and
                            an option to directly upload documents to detect harmful content and manage it.
                        </p>
                        <br/>
                        <h5>Web Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top" style={{height: '300px'}}>
                            <div className="align-top" style={{height: '300px'}}>
                                {poshdetectimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer8(index)}
                                        width="400"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen8 && (
                                    <ImageViewer
                                        src={poshdetectimages}
                                        currentIndex={currentImage8}
                                        onClose={closeImageViewer8}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>PoshTranslate</h2>
                        <p>
                            This product provides translation services. A mobile app that can directly translate texts,
                            images, voice recordings, documents. This product also provides API services.
                        </p>
                        <br/>
                        <h5>Mobile Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '450px'}}>
                                {poshtranslateimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer10(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen10 && (
                                    <ImageViewer
                                        src={poshtranslateimages}
                                        currentIndex={currentImage10}
                                        onClose={closeImageViewer10}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>Jambak</h2>
                        <p>
                            You want to go somewhere, but you have nothing in mind? Browse our featured lists, or browse
                            by category, location, and just scroll through the endless content. An app providing you
                            with options for hangouts, dates and fun activities to explore nearby.
                        </p>
                        <br/>
                        <h5>Mobile Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '450px'}}>
                                {jambakimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer9(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen9 && (
                                    <ImageViewer
                                        src={jambakimages}
                                        currentIndex={currentImage9}
                                        onClose={closeImageViewer9}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>OgoulTutor</h2>
                        <p>
                            OgoulTutor is a web-based platform that enables online teaching sessions by professional
                            tutors. With this online tutoring software, both tutors and students worldwide can connect
                            for short-term learning needs. OgoulTutor provides a search engine and an intuitive
                            classroom module to facilitate insightful learning.
                        </p>
                        <br/>
                        <h5>Web Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '300px'}}>
                                {ogoultutorimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer11(index)}
                                        width="400"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen11 && (
                                    <ImageViewer
                                        src={ogoultutorimages}
                                        currentIndex={currentImage11}
                                        onClose={closeImageViewer11}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <span>UX Projects</span>
                        <h2>OgoulEMS</h2>
                        <p>
                            xxx
                        </p>
                        <br/>
                        <h5>Mobile Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '450px'}}>
                                {emsimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer12(index)}
                                        width="200"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen12 && (
                                    <ImageViewer
                                        src={emsimages}
                                        currentIndex={currentImage12}
                                        onClose={closeImageViewer12}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/>
                        <h5>Web Images</h5>
                        <br/>
                        <div className="seezitt-scrollmenu align-top">
                            <div className="align-top" style={{height: '300px'}}>
                                {emswebimages.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer13(index)}
                                        width="400"
                                        key={index}
                                        style={{margin: "7px"}}
                                        alt=""
                                        className={'align-top'}
                                    />
                                ))}
                                {isViewerOpen13 && (
                                    <ImageViewer
                                        src={emswebimages}
                                        currentIndex={currentImage13}
                                        onClose={closeImageViewer13}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.9)"
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </div>
                        <br/><br/><br/>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default UXPage;


