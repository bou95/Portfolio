import React, {useState} from "react";
import Modal from "react-modal";
import svg1 from "../../assets/img/svg/1.svg"
import svg2 from "../../assets/img/svg/cube.png"
import svg3 from "../../assets/img/svg/3.svg"
import svg4 from "../../assets/img/svg/4.svg"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

Modal.setAppElement("#root");

const products = [
    {
        productTitle: "Seezitt",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "KT Messenger",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "OgoulEMS",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "Mizdah",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "OgoulTutor",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "WCT",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "Jambak",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "PoshDetect",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "PoshDubbing",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "PoshTranslate",
        productDescription: "A social media mobile and web application.",
    },
    {
        productTitle: "Qatar Airways",
        productDescription: "A social media mobile and web application.",
    },
];

const ServiceAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }

    function toggleModalTwo() {
        setIsOpen2(!isOpen2);
    }

    function toggleModalThree() {
        setIsOpen3(!isOpen3);
    }

    function toggleModalFour() {
        setIsOpen4(!isOpen4);
    }

    return (
        <div className="service_list">
            <ul>
                <li>
                    <Link to="/Portfolio/ux-projects">
                    <div
                        className="list_inner"
                        // onClick={toggleModalOne}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <img className="svg" src={svg1} alt=""/>
                        <div className="service_title">
                            <h3>UI/UX Design & Research</h3>
                        </div>

                        <div className="learn_more">Learn more
                            <span></span>
                        </div>
                    </div>

</Link>
                    {/* Start Modal Motion Graphy */}
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="custom-modal"
                        overlayClassName="custom-overlay"
                        closeTimeoutMS={500}
                    >
                        <div className="beny_tm_modalbox_service">
                            <button className="close-modal" onClick={toggleModalOne}>
                                {/*<img src="/src/assets/img/svg/cancel.svg" alt="x" />*/}
                            </button>
                            {/* End close icon */}

                            <div className="box_inner">
                                <div className="description_wrap scrollable">
                                    <div className="popup_informations">
                                        <div className="description">
                                            <h3>The list of Products and UX Study cases</h3>
                                            <p>
                                                Some of the products listed are a CEO idea turned into a product, some
                                                are existing products that requires a lot of improving to be able to
                                                compete in the market. Some are case studies.
                                            </p>
                                            <Row>
                                                {products.map((p) => (
                                                    <Col className={'product'}>
                                                        <h4>{p.productTitle}</h4>
                                                        <br/>
                                                        <p>{p.productDescription}</p>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End box inner */}
                        </div>
                        {/* End modal box news */}
                    </Modal>
                    {/* End Modal Motion Graphy */}
                </li>
                <li>
                    <div
                        className="list_inner"
                        onClick={toggleModalTwo}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                    >
                        <img className="svg" src={svg4} alt=""/>
                        <div className="service_title">
                            <h3>Web Development</h3>
                        </div>
                        <div className="learn_more">
                            Learn More<span></span>
                        </div>
                    </div>

                    {/* Start Modal Branding & Design */}
                    <Modal
                        isOpen={isOpen2}
                        onRequestClose={toggleModalTwo}
                        contentLabel="My dialog"
                        className="custom-modal"
                        overlayClassName="custom-overlay"
                        closeTimeoutMS={500}
                    >
                        <div className="beny_tm_modalbox_service">
                            <button className="close-modal" onClick={toggleModalTwo}>
                                <img src="/img/svg/cancel.svg" alt="close icon"/>
                            </button>
                            {/* End close icon */}

                            <div className="box_inner">
                                <div className="description_wrap scrollable">
                                    <div className="popup_informations">
                                        <div className="image">
                                            <img src="img/thumbs/4-3.jpg" alt=""/>
                                            <div
                                                className="main"
                                                style={{
                                                    backgroundImage: `url(${
                                                        process.env.PUBLIC_URL + "img/service/2.jpg"
                                                    })`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="description">
                                            {/*<h3>Branding &amp; Design Breakdown In Cinema 4D</h3>*/}
                                            {/*<p>*/}
                                            {/*  Just because we can't get out and about like we normally*/}
                                            {/*  would, doesn’t mean we have to taking pictures. There’s*/}
                                            {/*  still plenty you can do, provided you're prepared to use*/}
                                            {/*  some imagination. Here are a few ideas to keep you*/}
                                            {/*  shooting until normal life resumes.*/}
                                            {/*</p>*/}
                                            {/*<p>*/}
                                            {/*  Most photographers love to shoot the unusual, and you*/}
                                            {/*  don’t get much more unusual than These Unprecedented*/}
                                            {/*  Times. Right now everything counts as out of the*/}
                                            {/*  ordinary. There are a number of remarkable things about*/}
                                            {/*  these lockdown days that are worth photographing now we*/}
                                            {/*  can remember them when it is all over.*/}
                                            {/*</p>*/}
                                            {/*<h3>What Is Branding?</h3>*/}
                                            {/*<p>*/}
                                            {/*  Nullam blandit constituto eam ne, te nam ignota*/}
                                            {/*  vituper.atoribus. Malis cetero quem saipe, prou*/}
                                            {/*  thendrerit voluptaria.*/}
                                            {/*</p>*/}
                                            {/*<div className="in_list">*/}
                                            {/*  <ul>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Email is a crucial channel in any marketing.</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Curious what to say? How to say it?</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Whether you’re kicking off a new ca mpaign.</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>*/}
                                            {/*        Habitasse per feugiat aliquam luctus accumsan*/}
                                            {/*        curae*/}
                                            {/*      </p>*/}
                                            {/*    </li>*/}
                                            {/*  </ul>*/}
                                            {/*</div>*/}
                                            {/*<p>*/}
                                            {/*  Streets empty that are usually busy are remarkable and*/}
                                            {/*  can evoke the sense of historical pictures from before*/}
                                            {/*  the invention of the motorcar. Other things that are*/}
                                            {/*  different at the moment will be queues to get into*/}
                                            {/*  stores and the lines marked out on the floor to show how*/}
                                            {/*  far apart we should be.*/}
                                            {/*</p>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End box inner */}
                        </div>
                        {/* End modal box news */}
                    </Modal>
                    {/* End Modal Branding & Design */}
                </li>

                <li>
                    <div
                        className="list_inner"
                        onClick={toggleModalThree}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                    >
                        <img className="svg" src={svg3} alt=""/>
                        <div className="service_title">
                            <h3>Mobile Development</h3>
                        </div>
                        {/*<div className="learn_more">*/}
                        {/*  Learn More<span></span>*/}
                        {/*</div>*/}
                    </div>

                    {/* Start Modal Mobile App Design */}
                    <Modal
                        isOpen={isOpen3}
                        onRequestClose={toggleModalThree}
                        contentLabel="My dialog"
                        className="custom-modal"
                        overlayClassName="custom-overlay"
                        closeTimeoutMS={500}
                    >
                        <div className="beny_tm_modalbox_service">
                            <button className="close-modal" onClick={toggleModalThree}>
                                <img src="/img/svg/cancel.svg" alt="close icon"/>
                            </button>
                            {/* End close icon */}

                            <div className="box_inner">
                                <div className="description_wrap scrollable">
                                    <div className="popup_informations">
                                        <div className="image">
                                            <img src="img/thumbs/4-3.jpg" alt=""/>
                                            <div
                                                className="main"
                                                style={{
                                                    backgroundImage: `url(${
                                                        process.env.PUBLIC_URL + "img/service/3wall.jpg"
                                                    })`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="description">
                                            {/*<h3>Mobile App Design Breakdown In Cinema 4D</h3>*/}
                                            {/*<p>*/}
                                            {/*  Just because we can't get out and about like we normally*/}
                                            {/*  would, doesn’t mean we have to taking pictures. There’s*/}
                                            {/*  still plenty you can do, provided you're prepared to use*/}
                                            {/*  some imagination. Here are a few ideas to keep you*/}
                                            {/*  shooting until normal life resumes.*/}
                                            {/*</p>*/}
                                            {/*<p>*/}
                                            {/*  Most photographers love to shoot the unusual, and you*/}
                                            {/*  don’t get much more unusual than These Unprecedented*/}
                                            {/*  Times. Right now everything counts as out of the*/}
                                            {/*  ordinary. There are a number of remarkable things about*/}
                                            {/*  these lockdown days that are worth photographing now we*/}
                                            {/*  can remember them when it is all over.*/}
                                            {/*</p>*/}
                                            {/*<h3>What Is Branding?</h3>*/}
                                            {/*<p>*/}
                                            {/*  Nullam blandit constituto eam ne, te nam ignota*/}
                                            {/*  vituper.atoribus. Malis cetero quem saipe, prou*/}
                                            {/*  thendrerit voluptaria.*/}
                                            {/*</p>*/}
                                            {/*<div className="in_list">*/}
                                            {/*  <ul>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Email is a crucial channel in any marketing.</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Curious what to say? How to say it?</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Whether you’re kicking off a new ca mpaign.</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>*/}
                                            {/*        Habitasse per feugiat aliquam luctus accumsan*/}
                                            {/*        curae*/}
                                            {/*      </p>*/}
                                            {/*    </li>*/}
                                            {/*  </ul>*/}
                                            {/*</div>*/}
                                            {/*<p>*/}
                                            {/*  Streets empty that are usually busy are remarkable and*/}
                                            {/*  can evoke the sense of historical pictures from before*/}
                                            {/*  the invention of the motorcar. Other things that are*/}
                                            {/*  different at the moment will be queues to get into*/}
                                            {/*  stores and the lines marked out on the floor to show how*/}
                                            {/*  far apart we should be.*/}
                                            {/*</p>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End box inner */}
                        </div>
                        {/* End modal box news */}
                    </Modal>
                    {/* End Modal Mobile App Design*/}
                </li>

                <li>
                    <div
                        className="list_inner"
                        onClick={toggleModalFour}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                    >
                        <img className="svg" src={svg2} alt=""/>
                        <div className="service_title">
                            <h3>Game Design VR & AR</h3>
                        </div>
                        {/*<div className="learn_more">*/}
                        {/*  Learn More<span></span>*/}
                        {/*</div>*/}
                    </div>

                    {/* Start Modal Modal Ui/Ux Consultancy */}
                    <Modal
                        isOpen={isOpen4}
                        onRequestClose={toggleModalFour}
                        contentLabel="My dialog"
                        className="custom-modal"
                        overlayClassName="custom-overlay"
                        closeTimeoutMS={500}
                    >
                        <div className="beny_tm_modalbox_service">
                            <button className="close-modal" onClick={toggleModalFour}>
                                <img src="/img/svg/cancel.svg" alt="close icon"/>
                            </button>
                            {/* End close icon */}

                            <div className="box_inner">
                                <div className="description_wrap scrollable">
                                    <div className="popup_informations">
                                        <div className="image">
                                            <img src="img/thumbs/4-3.jpg" alt=""/>
                                            <div
                                                className="main"
                                                style={{
                                                    backgroundImage: `url(${
                                                        process.env.PUBLIC_URL + "img/service/4.jpg"
                                                    })`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="description">
                                            {/*<h3>*/}
                                            {/*  Ui/Ux Consultancy is the trending Part of Graphics*/}
                                            {/*</h3>*/}
                                            {/*<p>*/}
                                            {/*  Just because we can't get out and about like we normally*/}
                                            {/*  would, doesn’t mean we have to taking pictures. There’s*/}
                                            {/*  still plenty you can do, provided you're prepared to use*/}
                                            {/*  some imagination. Here are a few ideas to keep you*/}
                                            {/*  shooting until normal life resumes.*/}
                                            {/*</p>*/}
                                            {/*<p>*/}
                                            {/*  Most photographers love to shoot the unusual, and you*/}
                                            {/*  don’t get much more unusual than These Unprecedented*/}
                                            {/*  Times. Right now everything counts as out of the*/}
                                            {/*  ordinary. There are a number of remarkable things about*/}
                                            {/*  these lockdown days that are worth photographing now we*/}
                                            {/*  can remember them when it is all over.*/}
                                            {/*</p>*/}
                                            {/*<h3>What Is Branding?</h3>*/}
                                            {/*<p>*/}
                                            {/*  Nullam blandit constituto eam ne, te nam ignota*/}
                                            {/*  vituper.atoribus. Malis cetero quem saipe, prou*/}
                                            {/*  thendrerit voluptaria.*/}
                                            {/*</p>*/}
                                            {/*<div className="in_list">*/}
                                            {/*  <ul>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Email is a crucial channel in any marketing.</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Curious what to say? How to say it?</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>Whether you’re kicking off a new ca mpaign.</p>*/}
                                            {/*    </li>*/}
                                            {/*    <li>*/}
                                            {/*      <p>*/}
                                            {/*        Habitasse per feugiat aliquam luctus accumsan*/}
                                            {/*        curae*/}
                                            {/*      </p>*/}
                                            {/*    </li>*/}
                                            {/*  </ul>*/}
                                            {/*</div>*/}
                                            {/*<p>*/}
                                            {/*  Streets empty that are usually busy are remarkable and*/}
                                            {/*  can evoke the sense of historical pictures from before*/}
                                            {/*  the invention of the motorcar. Other things that are*/}
                                            {/*  different at the moment will be queues to get into*/}
                                            {/*  stores and the lines marked out on the floor to show how*/}
                                            {/*  far apart we should be.*/}
                                            {/*</p>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End box inner */}
                        </div>
                        {/* End modal box news */}
                    </Modal>
                    {/* End Modal Ui/Ux Consultancy*/}
                </li>
            </ul>
        </div>
    );
};

export default ServiceAnimation;
