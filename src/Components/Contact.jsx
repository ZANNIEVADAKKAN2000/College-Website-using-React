import React from "react";
import style from "./contact.module.css";
const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.card}>
        <h1>Our Location</h1>
        <p>
          Royal College of Engineering & Technology
          <br /> Chiramanangad P.O.
          <br />
          Akkikavu,
          <br />
          Thrissur – 680604
        </p>
      </div>
      <div className={style.card}>
        <h1>Contact Us</h1>
        <p>
          Mobile : +91 90484 99994
          <br /> Phone : +91(4885) 289009, 271121, 271122
          <br />
          CEO : +91 9946 892 002
          <br /> Secretary : +91 9846 984 699
          <br />
          Email : principal@royalcet.ac.in
          <br />
          ceo@royalcet.ac.in
        </p>
      </div>
      <div className={style.card}>
        <h1>Staffed Hours</h1>
        <p>
          Monday to Saturday
          <br />
          9.00am to 4.00pm
        </p>
      </div>
    </div>
  );
};

export default Contact;
