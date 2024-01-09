import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Service from "../../components/service/ServiceAnimation";
import Footer from "../../components/footer/Footer";

import {Link, Route, Routes} from 'react-router-dom';

const HomeLightAnimation = () => {
    document.body.classList.add("light");
    // const navigate = useNavigate();
    return (
        <div className="home-light">
            <div
                className="demo-fixed-wrapper"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="50"
            >
                {/*<button className="demo-button">*/}
                {/*  <Link to="/">*/}
                {/*    <span className="text">Demos</span>*/}
                {/*  </Link>*/}
                {/*</button>*/}
            </div>
            {/* demo show wrapper  */}

            <Header/>
            {/* End Header */}

            <Slider/>
            {/* End Slider */}

            <div className="beny_tm_about" id="about">
                <div className="container">
                    <div className="beny_tm_title_holder">
                        <span>About Me</span>
                        <h2>About Me</h2>
                        <p>
                            I love creating visually aesthetic software products, whether it be a web app, a mobile app
                            or a 3D game.
                        </p>
                    </div>
                    {/* End .beny_tm_title */}
                    <About/>
                    {/* End Slider */}
                </div>
            </div>
            {/* /ABOUT */}

            {/* SERVICES */}
            <div className="beny_tm_services" id="service">
                <div className="container">
                    <div className="beny_tm_title_holder">
                        <span>Services</span>
                        <h2>I provide wide range of digital services</h2>
                        <p>
                            I love to bring a friendly aesthetic feeling to the project I'm working on, no matter what
                            the platform is.
                        </p>
                    </div>
                    {/* End beny_tm_title */}
                    <Service/>
                </div>
            </div>
            {/* /SERVICES */}

            {/* PORTFOLIO */}
            {/*<div className="beny_tm_portfolio" id="portfolio">*/}
            {/*  <div className="container">*/}
            {/*    <div className="beny_tm_title_holder">*/}
            {/*      <span>Portfolio</span>*/}
            {/*      <h2>My Portfolio</h2>*/}
            {/*      <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,*/}
            {/*        egestas. Id fermentum nullam ipsum massa.*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*    /!* End beny_tm_title *!/*/}
            {/*    <Portfolio />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* /PORTFOLIO */}

            {/* TESTIMONIALS */}
            {/*<div className="beny_tm_testimonials">*/}
            {/*  <div className="container">*/}
            {/*    <div className="beny_tm_title_holder">*/}
            {/*      <span>Testimonials</span>*/}
            {/*      <h2>What's Clients Say.</h2>*/}
            {/*      <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,*/}
            {/*        egestas. Id fermentum nullam ipsum massa.*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*    /!* End beny_tm_title *!/*/}
            {/*    <div*/}
            {/*      className="testimonials_list"*/}
            {/*      data-aos="fade-right"*/}
            {/*      data-aos-duration="1200"*/}
            {/*      data-aos-delay="100"*/}
            {/*    >*/}
            {/*      <Testimonial />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* /TESTIMONIALS */}

            {/* NEWS */}
            {/*<div className="beny_tm_news" id="news">*/}
            {/*  <div className="container">*/}
            {/*    <div className="beny_tm_title_holder">*/}
            {/*      <span>Blogs</span>*/}
            {/*      <h2>Recent News</h2>*/}
            {/*      <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,*/}
            {/*        egestas. Id fermentum nullam ipsum massa.*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*    /!* End beny_tm_title *!/*/}
            {/*    <Blog />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* /NEWS */}

            {/*  CONTACT */}
            {/*<div className="beny_tm_contact" id="contact">*/}
            {/*  <div className="container">*/}
            {/*    <div className="contact_inner">*/}
            {/*      <div*/}
            {/*        className="left"*/}
            {/*        data-aos="fade-right"*/}
            {/*        data-aos-duration="1200"*/}
            {/*      >*/}
            {/*        <div className="beny_tm_title_holder">*/}
            {/*          <span>Contact</span>*/}
            {/*          <h2>Let's discuss your project</h2>*/}
            {/*        </div>*/}
            {/*        <div className="short_list">*/}
            {/*          <Address />*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      /!* End .left *!/*/}

            {/*      <div*/}
            {/*        className="right"*/}
            {/*        data-aos="fade-right"*/}
            {/*        data-aos-duration="1200"*/}
            {/*        data-aos-delay="150"*/}
            {/*      >*/}
            {/*        <div className="title">*/}
            {/*          <p>*/}
            {/*            I'm always open to discussing product*/}
            {/*            <br />*/}
            {/*            <span>design work or partnerships.</span>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*        <div className="fields">*/}
            {/*          <Contact />*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* /CONTACT */}
            {/*<div>*/}
            {/*    <Link to="Portfolio/Wedding-video-1">*/}
            {/*        <button>Video 1</button>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Link to="Portfolio/Wedding-video-2">*/}
            {/*        <button>Video 2</button>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/* COPYRIGHT */}
            <div className="beny_tm_copyright">
                <div className="container">
                    <Footer/>
                </div>
            </div>
            {/* /COPYRIGHT */}
        </div>
    );
};

export default HomeLightAnimation;
