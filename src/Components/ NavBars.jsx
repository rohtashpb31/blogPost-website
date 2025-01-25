import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Example from "./Category";
import Footerblog from "./Footerblog";
import { Link, useNavigate } from "react-router-dom";
import logo from './logo.png'

export default function NavBars({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const navigator = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedIn(true);
      // navigator("writeus");
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const links = [
    { to: "/", label: "HOME" },
    { to: "Features", label: "PLANS" },
    { to: "Contact", label: "CONTACT US" },
    { to: "writeus", label: "WRITE" },
    { to: "About", label: "ABOUT" },
    { to: "Blogs", label: "BLOGS" },
    { to: "profile", label: "PROFILE" },
  ];

  // const handleLogout = () => {
  //   // Remove token and set isLoggedIn to false
  //   localStorage.removeItem("Token");
  //   setIsLoggedIn(false);
  //   Swal.fire("Logout Successfully...");

  //   fetch("http://localhost:80/logout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       message: "Successfully logged out",
  //     }),
  //   })
  //     .then((response) => response.json()) // Convert response to JSON
  //     .then((data) => {
  //       console.log(data); // Handle the data
  //     })
  //     .catch((error) => {
  //       console.log(error); // Handle errors
  //     });
  // };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-white  mt-2"
        sticky
        // style={{background:'#ede6e6'}}
      >
        <Container className="">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="navbars">
              <Navbar.Brand>
                
                <div className="logos">
                <img className="logo3" src={logo} alt="" />
                  {/* <FontAwesomeIcon className="icons" icon={faFacebookF} />
                  <FontAwesomeIcon className="icons" icon={faTwitter} />
                  <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
                  <FontAwesomeIcon className="icons" icon={faInstagram} /> */}
                </div>
              </Navbar.Brand>
              <Nav className="oks">
                {links.map((link) => (
                  <Link key={link.to} to={link.to} onClick={handleClose}>
                    {link.label}
                  </Link>
                ))}
                {/* {isLoggedIn ? (
                  <Link
                    to={"/"}
                    onClick={() => {
                      handleClose();
                      handleLogout();
                    }}
                  >
                    LOGOUT
                  </Link>
                ) : (
                  <Link to={"/login"} onClick={handleClose}>
                    LOGIN/REGISTER
                  </Link>
                )} */}
              </Nav>
              <Nav>
                <div className=" menu m">
                  {/* <FontAwesomeIcon className="icons" icon={faMagnifyingGlass} /> */}
                  <FontAwesomeIcon
                    onClick={handleShow}
                    className="icons1"
                    icon={faBars}
                  />
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <h2 className="logo">husler post</h2> */}
      <img className="logo" src={logo} alt="" />
      <Button variant="primary" onClick={handleShow} className="me-2 home hide">
        <FontAwesomeIcon className="icons icons1" icon={faBars} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img className="logo1" src={logo} alt="" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="oks">
            <Link
              to={"/"}
              onClick={() => {
                handleClose();
              }}
            >
              HOME
            </Link>
            {/* <Example /> */}
            <Link
              to="Features"
              onClick={() => {
                handleClose();
              }}
            >
             PLANS
            </Link>
            <Link
              to="Contact"
              onClick={() => {
                handleClose();
              }}
            >
              CONTACT US
            </Link>
            <Link
              to="writeus"
              onClick={() => {
                handleClose();
              }}
            >
              WRITE 
            </Link>
            <Link
              to="About"
              onClick={() => {
                handleClose();
              }}
            >
              ABOUT
            </Link>
            <Link
              to={"Blogs"}
              onClick={() => {
                handleClose();
              }}
            >
              BLOGS
            </Link>
            <Link
              to={"profile"}
              onClick={() => {
                handleClose();
              }}
            >
              PROFILE
            </Link>
            {/* {isLoggedIn ? (
              <Link
                to={"/"}
                onClick={() => {
                  handleClose();
                  handleLogout();
                }}
              >
                LOGOUT
              </Link>
            ) : (
              <Link
                to={"/login"}
                onClick={() => {
                  handleClose();
                }}
              >
                LOGIN/REGISTER
              </Link>
            )} */}
          </Nav>
          <br />
          <Footerblog />
        </Offcanvas.Body>
      </Offcanvas>
    <br></br>
 
      {/* <hr className="mt-4"></hr> */}
    </>
  );
}
