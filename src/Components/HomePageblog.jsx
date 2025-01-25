import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Image, Row } from "react-bootstrap";
import Footerblog from "./Footerblog";
import NavBars from "./ NavBars";
import Footers from "./Footers";
import Slider from "./Slider";

export default function HomePageblog() {
  return (
    <>
  
    <div className="blogs">
      <Row>
        <Col sm={12} md={7} xl={9}>
          <div className="play ">
            <h2 className="skd">Travel the world</h2>
            <div className="line"></div>
            <div className="paragraph">
              <p>
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor

Elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laore.et dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
              </p>
              <p>
              
              </p>
              <br />
              <div className="line2"></div>
              <h3>Good design is making something intelligible and memorable.
                <br/>
              Great design is making something memorable and meaningful.</h3>
              <br />
              <div className="line2"></div>
              <p>
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
              </p>
              <p>
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
              </p>
              <Image
                src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/22-960x640.jpg"
                alt="img"
                fluid
              />
              <br />
              <br />
              <p>
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
              </p>
              <div className="author">
                <div className="authorimg"></div>
                <p>Author</p>
                <h1>John Philippe</h1>
                <p>
                  Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus
                  viverra quis at felis. Sed do.Lorem ipsum dolor sit amet,
                  consectetur Nulla fringilla purus Lorem ipsum dosectetur
                  adipisicing elit at leo dignissim congue.
                </p>
              </div>
              <hr />
            </div>
          </div>
        </Col>
        <Col sm={12} md={5} xl={3}>
          <div className="footer">
            <Footerblog />
            <br />
            <input
              className="inputes"
              type="text"
              placeholder="Your email address"
            />
            <br />
            <button className="signup">SIGN UP</button>
            <br />
            <br />
            <div className="line3"></div>
            <div className="about">
              <p>FOLLOW ME ON</p>
            </div>

            <div className="line3"></div>
            <br />
            <br />
            <div className="logr">
              <FontAwesomeIcon className="icons " icon={faFacebookF} />
              <FontAwesomeIcon className="icons" icon={faTwitter} />
              <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
              <FontAwesomeIcon className="icons" icon={faInstagram} />
            </div>
            <br />
            <br />
            <div className="line3"></div>
            <div className="about">
              <p>POPULAR POSTS</p>
            </div>
            <div className="line3"></div>
            <br />
            <div className="postes">
              <Image
                src="https://themes.themegoods.com/grandblog/demo/wp-content/uploads/2015/07/15-300x200.jpg"
                alt="img"
                width={120}
                fluid
              />
              <p>
                Playing skateboard
                <br />
                <span>July 22, 2015</span>
              </p>
            </div>
            <br />
            <div className="postes">
              <Image
                src="https://themes.themegoods.com/grandblog/demo/wp-content/uploads/2015/07/33-300x200.jpg"
                alt="img"
                width={120}
                fluid
              />
              <p>
                Top 10 Ingredients
                <br />
                <span>July 22, 2015</span>
              </p>
            </div>
            <br />
            <div className="postes">
              <Image
                src="https://themes.themegoods.com/grandblog/demo/wp-content/uploads/2015/07/4-300x200.jpg"
                alt="img"
                width={120}
                fluid
              />
              <p>
                Family Comes First
                <br />
                <span>July 22, 2015</span>
              </p>
            </div>
            <br />
            <br />
            <Image
              src="https://themes.themegoods.com/grandblog/demo/wp-content/uploads/2015/11/banner300x250.png"
              alt=""
              fluid
            />
            <br />
            <br />
            <div className="line3"></div>
            <div className="about">
              <p>LIKE US ON FACEBOOK</p>
            </div>
            <div className="line3"></div>
          </div>
        </Col>
      </Row>
    </div>
    <br/>

    </>
  );
}
