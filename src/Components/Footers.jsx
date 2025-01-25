// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedinIn,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";

// export default function Footers() {
//   return (
//     <>
//     <hr></hr>
//     <div className="ends">
//       <div className="lastpara">
//         <p className="m-0">©Copyright huslerpost 2024</p>
//       </div>
//       <div className="log">
//         <FontAwesomeIcon className="icons " icon={faFacebookF} />
//         <FontAwesomeIcon className="icons" icon={faTwitter} />
//         <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
//         <FontAwesomeIcon className="icons" icon={faInstagram} />
//       </div>
//     </div>

//     </>
//   );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4}>
            <h4 style={styles.footerHeading}>About Us</h4>
            <p style={styles.footerText}>
              We are a community of yoga enthusiasts, sharing knowledge and promoting wellness through various practices and resources.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4}>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li><Link to={"privacy"} style={styles.footerLink} onClick={()=>{
                window.scrollTo({top:"0", behavior:"smooth"})
              }}>Privacy</Link></li>
              <li><Link to={"footerWrite"}style={styles.footerLink} onClick={()=>{
                window.scrollTo({top:"0", behavior:"smooth"})
              }}>Write for Us</Link></li>
             <li><Link to={"blogs"}style={styles.footerLink} onClick={()=>{
                window.scrollTo({top:"0", behavior:"smooth"})
              }}>Blogs</Link></li>
              <li><Link to={"contact"}style={styles.footerLink} onClick={()=>{
                window.scrollTo({top:"0", behavior:"smooth"})
              }}>Contact Us</Link></li>
            </ul>
          </Col>

          {/* Subscription and Social Media Section */}
          <Col md={4}>
            <h4 style={styles.footerHeading}>Stay Connected</h4>
            <p style={styles.footerText}>Subscribe to our newsletter:</p>
            <div style={styles.subscription}>
              <input
                type="email"
                placeholder="Your email address"
                style={styles.subscriptionInput}
              />
              <button style={styles.subscriptionButton}>Sign Up</button>
            </div>

            <div style={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} style={styles.socialIcon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={styles.socialIcon} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} style={styles.socialIcon} />
              </a>
              <a href="https://www.instagram.com/rohtashpb31/?hl=en#/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={styles.socialIcon} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Inline styles for the footer
const styles = {
  footerContainer: {
    backgroundColor: "#ede6e6",
    color: "black",
    padding: "40px 0",
    fontFamily: "'Roboto', sans-serif",
    marginTop: "50px",
  },
  footerHeading: {
    fontSize: "18px",
    marginBottom: "15px",
    fontWeight: "bold",
    color: "black",
  },
  footerText: {
    fontSize: "16px",
    lineHeight: "1.8",
  },
  footerLinks: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  footerLink: {
    color: "black",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    transition: "color 0.3s",
  },
  footerLinkHover: {
    color: "blue",
  },
  subscription: {
    display: "flex",
    marginTop: "10px",
  },
  subscriptionInput: {
    padding: "10px",
    borderRadius: "4px 0 0 4px",
    border: "none",
    width: "70%",
  },
  subscriptionButton: {
    padding: "10px 2px",
    backgroundColor: "#0077b5",
    border: "none",
    color: "black",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
  },
  socialIcons: {
    marginTop: "20px",
  },
  socialIcon: {
    color: "black",
    marginRight: "15px",
    fontSize: "18px",
    transition: "color 0.3s",
    cursor: "pointer",
  },
  socialIconHover: {
    color: "black",
  },
  footerBottom: {
    marginTop: "30px",
    borderTop: "1px solid #444",
    paddingTop: "20px",
  },
  footerBottomText: {
    textAlign: "center",
    fontSize: "14px",
    color: "black",
  },
};

export default Footer;

