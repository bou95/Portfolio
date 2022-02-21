import React from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import TextLoop from "react-text-loop";

const SliderAnimation = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/3.jpg"
            })`,
          }}
        ></div>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
              Hi! I'm Bouthaina
            </h3>
            <h1
              className="job"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="50"
            >
              <TextLoop>
                <p className="loop-text lead">Web/Mobile Developer</p>
                <p className="loop-text lead">UI/UX Designer</p>
                <p className="loop-text lead">Game Designer</p>
                <p className="loop-text lead">Artist</p>
              </TextLoop>
              <br /> <span>Based In Qatar.</span>
            </h1>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              I am a full time developer who craves to express my love of art through my work.
              I am motivated to enhance people's quality of life through user-friendly aesthetic software.

              {/*I'm developer focused on crafting user‑friendly experiences, I am*/}
              {/*passionate about building excellent software that improves the*/}
              {/*lives of those around me.*/}
            </p>
            {/*<div*/}
            {/*  className="mobile_social"*/}
            {/*  data-aos="fade-up"*/}
            {/*  data-aos-duration="1200"*/}
            {/*  data-aos-delay="150"*/}
            {/*>*/}
            {/*  <Social />*/}
            {/*</div>*/}
            {/* End .social */}

            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="https://drive.google.com/file/d/1nuUW6l68A2KV1p-I_1jxwPY54KwkKvKG/view?usp=sharing">
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
             {/*End beny_tm_button*/}
          </div>
        </div>
      </div>
      {/* End .container */}

      {/*<div className="social" data-aos="fade-left" data-aos-duration="1200">*/}
      {/*  <SocialTwo />*/}
      {/*</div>*/}
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderAnimation;
