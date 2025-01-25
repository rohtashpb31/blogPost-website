import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Image, Row, } from "react-bootstrap";
import Footerblog from "./Footerblog";
import Slider from "./Slider";
import { Link } from "react-router-dom";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1); // Current page
  const [windowSize, setWindowSize] = useState(); // Number of blogs per page
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchBlogs();
  }, [page,windowSize]);
  const fetchBlogs = () => {
    fetch("http://localhost:80/post/all", {
      method: "post", // Add method POST to send the body
      headers: {
        "Content-Type": "application/json", // Set headers to indicate JSON body
      },
      body: JSON.stringify(
        // Convert the body to a JSON string
        {
          windowSize: windowSize,
          page: page,
        }
      ),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data.posts);
        setWindowSize(data.totalPosts)
        setTotalPages(data.totalPages || 1);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
      });
  };
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle moving to the previous page
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const stylesheet = {
    blogs: {
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      fontSize: "2.1rem",
      marginTop: "20px",
      marginBottom: "10px",
      padding: "10px",
      fontWeghit: "800",
    },
    p: {
      textAlign: "center",
      width: "700px",
      margin: "auto",
    },
  };
  const styles = {
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
  };

  return (
    <>
      <Slider />
      <div className="blogs">
      <Row>
          <h1 style={stylesheet.blogs}>City Center Bridge</h1>
          <p style={stylesheet.p}>
            Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
            sit amet, consectetur Nulla fringilla purus at leo dignissim congue.
            Mauris elementum accumsan leo vel tempor. …
          </p>
          
          <Col sm={12} md={7} xl={9}>
            <div className="home_image1">
              <Image
                src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/22-960x640.jpg"
                alt="img"
                fluid
              />
            </div>
            <div className="homePage_contant">
              <h1>Beauty of Nature</h1>
              <hr></hr>
              <span>Posted On July 22, 2015</span>
              <p>
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus at leo
                dignissim congue. Mauris elementum accumsan leo vel tempor. Sit
                amet cursus nisl aliquam. …
              </p>
              <hr></hr>
              <h5>Continue Reading</h5>
              <span>No Comment</span>
            </div>
            <div className="wrapss">
              <Row className="m-0 p-0">
                {blogs ? (
                  blogs
                    .slice(-4)
                    .reverse()
                    .filter((item) =>
                      item.title.toLowerCase().includes(value.toLowerCase())
                    )
                    .map((item) => (
                      <>
                        <Col className="p-0 m-0" sm={12} md={12} xl={6}>
                          <div key={item._id} className="homepag2">
                            <div className="homepageimage2 h-100 w-80">
                              <Image className="blogimg" src={item.images[0].path} alt="ok" fluid  />
                            </div>
                            <h3 className="p-0 m-0">{item.title}</h3>
                            
                            <span className="p-0 m-0">
                              {new Date(item.publishTime).toLocaleDateString()}
                            </span>
                            <p className="pt-0 mb-0">
                              {item.description[0].Description}..
                              <Link
                                to={`/blog/${item._id}`}
                                onClick={() => {
                                  console.log();
                                }}
                              >
                                Read more
                              </Link>
                            </p>
                          </div>
                        </Col>
                      </>
                    ))
                ) : (
                  <p className="mt-4">No blogs to display </p>
                )}
                {/* <Col className="center" sm={12} md={12} xl={6}>
                  <div className="homepag2">
                    <div className="homepageimage2">
                      <Image
                        src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/picjumbocom_hnck4081-700x529.jpg"
                        alt="img"
                        fluid
                      />
                    </div>
                    <h3>Fashion Model Shoot</h3>
                    <hr />
                    <span>July 22, 2015</span>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet, consectetur Nulla fringilla purus at
                      leo dignissim congue. Mauris elementum accumsan leo vel
                      tempor. Sit amet cursus nisl aliquam. …
                      <Link
                        to={"/homepageblog"}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
                          console.log("Navigating to blog post");
                        }}
                      >
                        Read me
                      </Link>
                    </p>
                  </div>
                </Col> */}
                {/* <Col sm={12} md={12} xl={6}>
                  <div className="homepag2 ">
                    <div className="homepageimage2">
                      <Image
                        src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/8-700x529.jpg"
                        alt="img"
                        fluid
                      />
                    </div>
                    <h3>Fashion Model Shoot</h3>
                    <hr />
                    <span>July 22, 2015</span>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet, consectetur Nulla fringilla purus at
                      leo dignissim congue. Mauris elementum accumsan leo vel
                      tempor. Sit amet cursus nisl aliquam. …
                      <Link
                        to={"/homepageblog"}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
                          console.log("Navigating to blog post");
                        }}
                      >
                        Read me
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} xl={6}>
                  <div className="homepag2">
                    <div className="homepageimage2">
                      <Image
                        src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/photo-1418065460487-3e41a6c84dc5-700x529.jpg"
                        alt="img"
                        fluid
                      />
                    </div>
                    <h3>Fashion Model Shoot</h3>
                    <hr />
                    <span>July 22, 2015</span>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet, consectetur Nulla fringilla purus at
                      leo dignissim congue. Mauris elementum accumsan leo vel
                      tempor. Sit amet cursus nisl aliquam. …
                      <Link
                        to={"/homepageblog"}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
                          console.log("Navigating to blog post");
                        }}
                      >
                        Read me
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} xl={6}>
                  <div className="homepag2">
                    <div className="homepageimage2">
                      <Image
                        src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/4-700x529.jpg"
                        alt="img"
                        fluid
                      />
                    </div>
                    <h3>Fashion Model Shoot</h3>
                    <hr />
                    <span>July 22, 2015</span>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet, consectetur Nulla fringilla purus at
                      leo dignissim congue. Mauris elementum accumsan leo vel
                      tempor. Sit amet cursus nisl aliquam. …
                      <Link
                        to={"/homepageblog"}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
                          console.log("Navigating to blog post");
                        }}
                      >
                        Read me
                      </Link>
                    </p>
                  </div>
                </Col> */}
              </Row>
            </div>
          </Col>
          <Col sm={12} md={5} xl={3}>
            <br></br>
            <div className="footer footer-stiky">
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

              <div className="logr">
                <div style={styles.socialIcons}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      style={styles.socialIcon}
                    />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={styles.socialIcon}
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      style={styles.socialIcon}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/rohtashpb31/?hl=en#/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={styles.socialIcon}
                    />
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
              <br></br>
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
              <br></br>
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
              <div className="about">
                <br></br>
                <div className="line3"></div>
                <p>LIKE US ON FACEBOOK</p>
              </div>
              <div className="line3"></div>
              <br></br>
              <br></br>
              <Image
                src="https://img.freepik.com/free-photo/woman-taking-selfie_1139-521.jpg?uid=R134006824&ga=GA1.2.1430684539.1726610342&semt=ais_hybrid"
                alt=""
                fluid
              />

              <div className="about">
                <br></br>
                <div className="line3"></div>
                <p>LIKE US ON YOUTUBE</p>
              </div>
              <div className="line3"></div>
              <br></br>
            </div>
          </Col> 
        </Row>
      </div>
    </>
  );
}
