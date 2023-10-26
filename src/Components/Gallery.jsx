import React from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.png";
import img11 from "./images/11.png";
import img12 from "./images/12.png";
import img13 from "./images/13.png";
import img14 from "./images/14.png";
import img15 from "./images/15.png";
import img16 from "./images/16.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>GALLERY</h1>
      <div className="wrapper">
        <img src={img1} />
        <img src={img15} />
      </div>
      <div className="wrapper">
        <img src={img2} />
        <img src={img11} />
      </div>
      <div className="wrapper">
        <img src={img13} />
        <img src={img10} />
      </div>
      <div className="wrapper">
        <img src={img14} />
        <img src={img16} />
      </div>
      <div className="wrapper">
        <img src={img9} />
        <img src={img12} />
      </div>
      <div className="wrapper">
        <img src={img7} />
        <img src={img3} />
      </div>
      <div className="wrapper">
        <img src={img5} />
        <img src={img6} />
      </div>
      <div className="wrapper">
        <img src={img8} />
        <img src={img4} />
      </div>
    </div>
  );
};

export default Gallery;
