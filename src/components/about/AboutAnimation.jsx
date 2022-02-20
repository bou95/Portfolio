import React from "react";
import Skills from "../skills/SkillsAnimation";
import me from "../../../src/assets/img/about/aboutME.png"
import svg1 from "../../assets/img/svg/1.svg";
const AboutAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="thumb" />
          <div
    className="image"
    data-aos="fade-right"
    data-aos-duration="1200"
    style={{
      // backgroundImage: `url(${
      //     process.env.PUBLIC_URL + "img/about/aboutME.png"
      // })`,
// height: '100%',
//      backgroundColor: 'pink'
    }}
    ></div>

          <img className="svg" src={me} alt="" />


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
              A creative <span className="theme-color"> Software Engineer </span>
              based in <span className="theme-color">Qatar</span>
            </h5>
            <p>
              You can call me Bou! And hey I'm a developer and a designer
              yet I honestly care most about the idea of the project and the purpose it serves.
              I really care about how and why I do what I do. This is why I find UX design fulfilling.
              I also enjoy coding and seeing an idea come to life. Inspiring ideas are my fuel!
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
                    <span>Age :</span> 26 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +97455029091
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
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> AR, EN, FR
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
            <div className="beny_tm_button color-outline">
              <a href="img/about/cv.webp" download>
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
