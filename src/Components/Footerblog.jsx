import React from "react";
import img from "./aboutme.jpg";
import img2 from "./signature.png";
import { Image } from "react-bootstrap";
export default function Footerblog() {
  return (
    <div className="footer">
      <div className="line3"></div>
      <div className="about">
        <p>ABOUT</p>
      </div>
      <div className="line3"></div>
      <br />
      <div className="footerimg">
        <Image src={img} alt="img" fluid  />
      </div>
      <br />
      <p>
        Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et
        malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor
      </p>
      <div className="footerimg">
        <Image src={img2} alt="img" fluid  width={190}/>
      </div>
      <br />
      <br />
      <div className="line3"></div>
      <div className="about">
        <p>SUBSCRIBE</p>
      </div>
      <div className="line3"></div>
    </div>
  );
}
