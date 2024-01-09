import React from "react";
import svg1 from "../assets/img/svg/phone.svg";
import svg2 from "../assets/img/svg/mail.svg";
import svg3 from "../assets/img/svg/map.svg";

const Address = () => {
  return (
    <ul>
        <li>
            <img className="svg" src={svg1} alt=""/>
            <a href="Tel: 55029091">+974 5502 9091</a>
        </li>


        <li>
            <img className="svg" src={svg2} alt=""/>
            <span>
          <a href="mailto:be.benkablia@gmail.com">be.benkablia@gmail.com</a>
        </span>
        </li>
        {/* End li */}

        <li>
            <img className="svg" src={svg3} alt=""/>
            <span>
          Lusail, Qatar
        </span>
        </li>
    </ul>
  );
};

export default Address;
