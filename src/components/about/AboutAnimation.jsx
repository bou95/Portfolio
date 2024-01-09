import React from "react";
import Skills from "../skills/SkillsAnimation";
import me from "../../../src/assets/img/about/aboutME.png"
import svg1 from "../../assets/img/svg/1.svg";
import img1 from "../../assets/img/thumbs/1-1.jpg"
const AboutAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src={img1} alt="" />
          <div
              className="image"
              data-aos="fade-right"
              data-aos-duration="1200"
              style={{
                // backgroundImage: `url(${
                //     process.env.PUBLIC_URL + "img/about/aboutME.png"
                // })`,
                backgroundImage: `url(${
                   me
                })`,
              }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>I'm Bouthaina Benkablia</h3>
            <h5>
              A creative <span className="theme-color"> Product Owner </span> & <span className="theme-color"> Project Director </span>
              <br/>
              based in <span className="theme-color">Qatar</span>
            </h5>
            <p>

              I am a results-oriented Project Director, adept at seamlessly integrating UX design and technical expertise. My strength lies in bridging the gap between user-centric design and technical implementation to create innovative and user-friendly products, demonstrating a keen eye for detail in the dynamic landscape of technology and user experience.
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Bouthaina Benkablia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> Doha, Qatar
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 29 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> (+974) 55029091
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> Algeria
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> be.benkablia@gmail.com
                  </p>
                </li>

                  <li className={"full"}>
                    <p>
                      <span>Languages :</span> English, Arabic, French
                    </p>
                  </li>


              </ul>
              {/*<ul>*/}
              {/*  <li>*/}
              {/*    <p>*/}
              {/*      <span>Languages :</span> Arabic, English, French*/}
              {/*    </p>*/}
              {/*  </li>*/}
              {/*</ul>*/}

            </div>
            {/* End list */}
            <div className="beny_tm_button color-outline">
            <a href="https://drive.google.com/file/d/1nuUW6l68A2KV1p-I_1jxwPY54KwkKvKG/view?usp=sharing" download>
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutAnimation;
