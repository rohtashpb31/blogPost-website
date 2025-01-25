import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function RegisterForm({ toggleForm }) {

      const [Opt, setOpt] = useState("");
      // Handle input change logic
      const handleInputChange = (e) => {
        
      };
    let navigator=useNavigate()
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch API for registration
        fetch("http://localhost:80/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: (e.target[0].value),
            username: (e.target[1].value),
            email: (e.target[2].value),
            password: (e.target[3].value),
            dob: (e.target[5].value),
        }), // sending the form data
        })
          .then((response) => response.json()
          )
          .then((data) => {
            console.log("Registration Successful:", data);
            console.log(data.
                message
                )
                if(data.
                    message==="Duplicate value error. Please provide a unique value."){
                        Swal.fire("Already exist Enter unique Username or email");
                    }
                    if(data.message==="Username cannot contain spaces. Please enter a valid username."){
                        Swal.fire("Username cannot contain spaces");
                    }
                    if(data.message==="All fields are required."){
                        Swal.fire("All fields are required.");
                      }
                      if(data.message==="Signup successful."){
                        Swal.fire("0pt is send to your mail");
                      }
                   
          })
          .catch((err) => {
            console.error("Error:", err);
          });
          
      };
      let optsumbit = ()=>{
        fetch("http://localhost:80/verifyOtp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp:Opt
            }), // sending the form data
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Registration Successful:", data);
              if(data.message==="Missing authentication token or OTP"){
                Swal.fire("Server down");
              }
              if(data.message==="Invalid OTP"){
                Swal.fire("Invalid");
              }
              if(data.message==="You have already verified."){
                Swal.fire("You have already verified.");
                navigator("/")
              }
              if(data.message==='You have exceeded the maximum number of OTP attempts'){
                Swal.fire("You have exceeded the maximum number of OTP attempts");
              }
              if(data.message==='The OTP has expired. Please request a new one.'){
                Swal.fire("The OTP has expired. Please request a new one.");
              }
              if(data.message==="Hello hjffgurhfuhrefu, welcome to your profile!"){
                Swal.fire("Register Successfully");
                navigator("/")
              }
              
            })
            .catch((err) => {
              console.error("Error:", err);
            });
      }
      const styles={
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
      }
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={12} md={7} xl={7}>
            <motion.div className="p-4 shadow-lg rounded bg-white">
              <h1 className="text-center mb-4 mt-2">Register</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Enter Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsernames">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Enter Username"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfromPassword">
                  <Form.Label>Confrim Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="Confrimpassword"
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword2">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    onChange={handleInputChange}
                    placeholder="Enter your DOB"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword3">
                <Form.Label> Email Opt</Form.Label>
                    <div className="optinput d-flex">
                  <Form.Control
                    type="number"
                    name="otp"
                    value={Opt}
                    onChange={(e)=>{setOpt(e.target.value)}}
                    placeholder="Enter otp"
                  />
                   <Button
                  variant="primary"
                  type="submit"
                >
                  Get Otp
                </Button>
                    </div>
                </Form.Group>
              </Form>
              <Button
                  variant="primary"
                onClick={optsumbit}
                  type="submit"
                  className="w-100"
                >
                  Register Now
                </Button>
              <div className="text-center mt-3">
                <Link variant="link" to={"/login"} onClick={toggleForm}>
                  Already have an account? Login
                </Link>
              </div>
            </motion.div>
          </Col>
    <Col sm={12} md={5} xl={3}>
    <br></br>
    <div className="footer">
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
              <div className="logr">
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
              </div>
          
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
             
              <br />
              <Image
                src="https://themes.themegoods.com/grandblog/demo/wp-content/uploads/2015/11/banner300x250.png"
                alt=""
                fluid
              />
              <br/>
              <div className="line3"></div>
              <div className="about">
                <p>LIKE US ON FACEBOOK</p>
              </div>
              <div className="line3"></div>
            </div>
          </Col>
    
        </Row>
      </Container>
    </motion.div>
  );
}
