import React from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Toastify from 'toastify-js'
import Footerblog from "./Footerblog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function LoginForm({ toggleForm }) {

    const navigate = useNavigate();
  const handleInputChange = (e) => {
    // Handle input change logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch API for registration
    fetch("http://localhost:80/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }), // sending the form data
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration Successful:", data);
        console.log(data.message);
        if (data.message === "Invalid username or password.") {
          Swal.fire("Invalid username or password.");
        }
        if (data.message === "Username and password are required.") {
          Swal.fire("Username and password are required.");
        }
        if (data.message === "Please verify your OTP.") {
          Swal.fire("Please verify your OTP.");
        }
        if (data.message === "Login successful") {
          // Swal.fire("Login successful");
          localStorage.setItem("Token", data.token);
          Toastify({
            text: "Login successful",
            className: "info",
            offset: {
              x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
          navigate('/');
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
    
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="my-5">
        <Row className="justify-content-center">
        <Col sm={12} md={7} xl={7}>
            <motion.div className="p-4 shadow-lg rounded bg-white">
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    type="text"
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

                <Button variant="primary" type="submit" className="w-100">
                  Login
 
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Link variant="link" to={"/register"} onClick={toggleForm}>
                  Don't have an account? Register
                </Link>
              </div>
            </motion.div>
          </Col>
          <Col sm={12} md={5} xl={3}>
          <div className="footer">
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
            </div>
    </Col>
        </Row>
      </Container>
    </motion.div>

    </>
  );
}
