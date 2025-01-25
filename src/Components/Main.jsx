import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Image, Row } from "react-bootstrap";
import Footerblog from "./Footerblog";
import Slider from "./Slider";
export default function Main() {
  return (
    <>
    <Slider/>
    
      <div className="blogs">
        <Row>
            <Col sm={12} md={7} xl={9}>
           
          <div className="play ">
            <h2 className="skd">Playing skateboard</h2>
            <div className="line"></div>
            <div className="paragraph">
              <p>
              In the pursuit of radiant and healthy skin, nature often holds the key to our skincare woes. Among its many botanical treasures, geranium essential oil stands out as a versatile and potent elixir, offering a myriad of benefits for skin rejuvenation. From soothing inflammation to balancing oil production and promoting cell regeneration, geranium essential oil holds the promise of a clearer, more radiant complexion
              </p>
              <p>
              In this illuminating guide, we delve deep into the beauty benefits of geranium essential oil and explore how this floral gem can transform your skincare routine. From its remarkable ability to address various skin concerns to practical methods of application and DIY recipes, we uncover the secrets of geranium essential oil for achieving your skincare goals.
              Join us on a journey of discovery as we unlock the beauty secrets of geranium essential oil and embark on a path towards healthier, happier skin.
              </p>
              <br />
              <div className="line2"></div>
              <h3>
              Benefits of Geranium Essential Oil for Skin:
              </h3>
              <br />
              <div className="line2"></div>
              <p>
              Geranium essential oil is a powerhouse when it comes to promoting skin health. Its natural anti-inflammatory properties make it effective in reducing redness and inflammation, making it an ideal choice for those with acne-prone or sensitive skin. Additionally, its antiseptic properties help in preventing and healing skin infections, making it a valuable addition to any skincare routine.

              </p>
              <p>
              One of the remarkable qualities of geranium essential oil is its ability to balance the skin. Whether you have oily or dry skin, geranium essential oil can help regulate sebum production, controlling oiliness and preventing clogged pores. Its balancing effect makes it suitable for a wide range of skin types.

              </p>
              <p>
              Moreover, geranium essential oil promotes cell regeneration, which can result in a more youthful and radiant complexion. By encouraging the growth of new skin cells, it helps in fading scars, blemishes, and other imperfections, leaving the skin looking smoother and more even-toned.
              </p>
              <p>
                Another notable benefit of geranium essential oil is its ability to improve blood circulation. Enhanced blood flow to the skin promotes a healthy glow and can even out skin tone, giving you a vibrant and refreshed appearance. Additionally, geranium essential oil is rich in antioxidants, which protect the skin from damage caused by free radicals and environmental stressors, such as pollution and UV radiation.
In summary, the benefits of geranium essential oil for skin are numerous and diverse, making it a valuable addition to any skincare regimen.

              </p>
              <Image
                src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/22-960x640.jpg"
                alt="img"
                
                fluid
                
              />
              <br />
              <br />
              <p>
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus at leo
                dignissim congue. Mauris elementum accumsan leo vel tempor. Sit
                amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus
                viverra quis at felis. Sed do.Lorem ipsum dolor sit amet,
                consectetur Nulla fringilla purus Lorem ipsum dosectetur
                adipisicing elit at leo dignissim congue. Mauris elementum
                accumsan leo vel tempor.
              </p>
              <p>
                Aliquam et elit eu nunc rhoncus viverra quis at felis et netus
                et malesuada fames ac turpis egestas. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes....
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
           <Footerblog/>
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
    </>
  );
}
