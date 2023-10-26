import React from "react";
import logo from "./images/footer-logo-150x150.png";

const Footer = () => {
  return (
    <footer>
      <div class="container place">
        <img src={logo} height="90px" width="auto" />
        <p>
          Royal College of Engineering & Technology Chiramanangad P.O. Akkikavu,{" "}
          <br />
          Thrissur – 680604
          <br />
          04885–271122
          <br />
          <a href="webteam@royalcet.ac.in">webteam@royalcet.ac.in</a>
        </p>
      </div>
      <div class="container list">
        <div className="row head">
          <div className="col">Useful Links</div>
          <div className="col">Campus Life</div>
          <div className="col">Academics</div>
        </div>
        <div className="row">
          <div className="col-4 line"></div>
          <div className="col-4 line"></div>
          <div className="col-4 line"></div>
        </div>

        <div className="row items">
          <div className="col">Admission</div>
          <div className="col">Arts and Culture</div>
          <div className="col">Awards</div>
        </div>

        <div className="row items">
          <div className="col">Scholarships</div>
          <div className="col">Magazine</div>
          <div className="col">IEEE</div>
        </div>
        <div className="row items">
          <div className="col">RACE</div>
          <div className="col">Sports @ Royal</div>
          <div className="col">IETE</div>
        </div>
        <div className="row items">
          <div className="col">IIT Bombay Remote Centre</div>
          <div className="col">NSS</div>
          <div className="col">KBAIC_102</div>
        </div>
        <div className="row items">
          <div className="col">R-REAP</div>
          <div className="col">Student Counselling</div>
          <div className="col">Student Projects</div>
        </div>
        <div className="row items">
          <div className="col">Gallery</div>
          <div className="col">Technical Fest @ RCET</div>
          <div className="col">CSI</div>
        </div>
        <div className="row items">
          <div className="col"></div>
          <div className="col">SDPK</div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
