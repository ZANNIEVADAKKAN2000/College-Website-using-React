import React from "react";
import style from "./about.module.css";
import icon1 from "./images/col-icon-1.png";
import icon2 from "./images/col-icon-2.png";
import icon3 from "./images/col-icon-3.png";
import icon4 from "./images/col-icon-4.png";
const About = () => {
  return (
    <div className={style.about}>
      <div className={style.box}>
        <h1>About Our College</h1>
        <p>
          We are one of the Next Generation Engineering Institutions in Kerala
          which has been producing quality technocrats in our country for more
          than a decade.
          <br />
          <br /> Our college is situated in Thrissur district, the cultural
          capital of Kerala, with cochin International Airport just 75 kms away.
          RCET is blessed with a wonderful campus of 35 acres surrounded by lush
          and serene natural beauty that inspires tomorrows engineers to succeed
          personally and professionally in this competitive world. Acclaimed as
          one of the best equipped institutions , Royal college of engineering &
          Technology has, in a relative short span, marked its presence among
          the community. <br /> The institution has been Accredited by NAAC,
          valid for a period of 5 years from 15 – 02 – 2021.
        </p>
      </div>
      <div className={style.menus}>
        <div className={style.mission}>
          <img src={icon1} className="mt-2" />
          <h3>Mission</h3>
          <p>
            To groom the youth into eminent technocrats- with lifelong learning
            skills to meet future requirements, deep sense of social
            responsibility, strong ethical values and a global outlook, to face
            the challenges of the changing world.
          </p>
        </div>
        <div className={style.vision}>
          <img src={icon2} />

          <h3>Vision</h3>
          <p>
            To continuously grow as a Resourceful, Outstanding, Youthful,
            Adaptive institution in the field of engineering and technology
            habituating Lifelong learning.
          </p>
        </div>
        <div className={style.ug}>
          <img src={icon3} />

          <h3>UG and PG</h3>
          <p>
            We extremely value and appreciate your interest in seeking admission
            to the Engineering Degree programme offered by our College.
          </p>
        </div>
        <div className={style.university}>
          <img src={icon4} />

          <h3>University Life</h3>
          <p>
            APJ Abdul Kalam Technological University, formerly known as Kerala
            Technological University (KTU), is a public university headquartered
            in Thiruvananthapuram, state capital of Kerala.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
