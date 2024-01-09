import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    passingYear: "2021",
    degree: "Professional Diploma in UX Design",
    instituteName: "Glasgow Caledonian University - UK",
  },
  {
    passingYear: "2019",
    degree: "TOEFL iBT",
    instituteName: "English Proficiency - 99/120 - Qatar",
  },
  {
    passingYear: "2013-2018",
    degree: "Bachelor of Computer Science",
    instituteName: "Qatar University - GPA 3.04 - Qatar",
  },
];

const skillsContent = [
  {
    name: "HTML/CSS/JS",
    skillPercent: "100",
  },
  {
    name: "Angular",
    skillPercent: "85",
  },
  {
    name: "React JS",
    skillPercent: "100",
  },
  {
    name: "React Native",
    skillPercent: "90",
  },
  {
    name: "Adobe Creative Suite",
    skillPercent: "75",
  },
  {
    name: "UI Design / UX Research",
    skillPercent: "100",
  },
  {
    name: "Prototyping / Wireframing",
    skillPercent: "100",
  },
  {
    name: "User flow",
    skillPercent: "100",
  },
  {
    name: "Unity 3D",
    skillPercent: "75",
  },
];

const awardContent = [
  {
    awardYear: "2016",
    degree: "Game Design Award",
    instituteName: "Qatar University",
  },
  {
    awardYear: "2013 - 2018",
    degree: "Dean's List Awards",
    instituteName: "Qatar University",
  },
  {
    awardYear: "2016",
    degree: "The 8th Annual Qatar Japanese Speech Contest",
    instituteName: "Japan Embassy",
  },
  {
    awardYear: "2013",
    degree: "Best English Short Story Competition",
    instituteName: "US Embassy",
  },  {
    awardYear: "2012",
    degree: "\"I am discovering materials\" Competition",
    instituteName: "Qatar University",
  },
];
const experienceContent = [
  {
    designation: "UX Director",
    jobType: "Full Time | Flexible",
    year: "2021 - Now",
    compnayName: "Ogoul Technology",
    descriptions:
        "Promoted to lead the UX Department towards improving the user experience, the feel and the look of all the products under the company. I was handling many products simultaneously from usability testing to planning and designing and reviewing all the work done by the UX Designers. As a management member, I worked with all the departments that helped me improve the quality of my teams work. My Engineering background allowed me to help the developers turn the designs into real screens.",
    animationDealy: "",
  },
  {
    designation: "Software Engineer",
    jobType: "Full Time | Flexible",
    year: "2020 - 2021",
    compnayName: "Ogoul Technology",
    descriptions:
      "I design and develop services of all sizes, specializing in creating stylish, modern websites and mobile apps. Angular, React JS, React native, Flutter",
    animationDealy: "",
  },
  {
    designation: "Exhibition Coordinator",
    jobType: "Full Time | Office",
    year: "2018 - 2019",
    compnayName: "The Planners - Kahramaa Awareness Park",
    descriptions:
      "I improved the technological park services and developed digital interactive games along giving workshops.",
    animationDealy: "200",
  },
  {
    designation: "Unity 3D VR Developer",
    jobType: "Free Lance | Flexible",
    year: "2019",
    compnayName: "Ministry of Interior",
    descriptions:
      "I created a VR Experience that includes customized Qatari designs for the MOI Qtar Civil Defence.",
    animationDealy: "",
  },
  {
    designation: "Web Developer",
    jobType: "Free Lance | Flexible",
    year: "2018",
    compnayName: "Hangul Nihongo",
    descriptions:
      "I published a website introducing Hangul Nihongo and the services it provides, it's a language center in Qatar. ",
    animationDealy: "200",
  },
  {
    designation: "Graphic Designer",
    jobType: "Part Time | Flexible",
    year: "2016 - 2017",
    compnayName: "Qatar University",
    descriptions:
        "Daily posters and designs made for several departments mainly to market information of events and workshops within campus.",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab>Experience</Tab>
            <Tab>Education & Skills</Tab>
          </TabList>
          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                  <div
                      className="col-6"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.animationDealy}
                  >
                    <div className="resume-box-01">
                      <h5>{val.designation}</h5>
                      <h6>{val.jobType}</h6>
                      <span>{val.year}</span>
                      <div className="hr"></div>
                      <h4>
                        <label>{val.compnayName}</label>
                      </h4>
                      <p>{val.descriptions}</p>
                    </div>
                  </div>
                  //  End .col
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.passingYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="skills ">
                    <h4>
                      <label>Skills</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number">{val.skillPercent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Awards</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
