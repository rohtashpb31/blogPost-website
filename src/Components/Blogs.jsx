import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import img from "./aboutme.jpg";
import { Image, Row, Col, Button } from "react-bootstrap";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1); // Current page
  const [windowSize, setWindowSize] = useState(9); // Number of blogs per page
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchBlogs();
  }, [page]);
  const fetchBlogs = () => {
    fetch("http://localhost:80/post/all", {
      method: "post", // Add method POST to send the body
      headers: {
        "Content-Type": "application/json",  // Set headers to indicate JSON body
      },
      body: JSON.stringify(   // Convert the body to a JSON string
        {
          "windowSize":windowSize,
          "page":page
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
        setTotalPages(data.totalPages || 1);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
      });
  };
  const handleNextPage = () => {
    if (page < totalPages) {
      
      setPage(page+ 1);
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
    <>
      <div className="features-container m-0 p-0 ">
        <h1 className="features-title">Our Blogs</h1>
        <Row>
        <Col sm={12} md={8} xl={9}>
        <Row>
          <div className="rohtash">
            {" "}
            <input
              type="text"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="Search Blogs"
            />
            <button>Search</button>
          </div>
        </Row>
        <Row>
          {
          blogs?(
          blogs
          .reverse()
            .slice()
            .filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase())
            )
            .map((item) => (
              <>
                <Col sm={12} md={6} xl={4} className="mb-3">
                  <div key={item._id} className="feature-card h-100">
                  <p className="lorem">
                      PublishTime:{" "}
                      {new Date(item.publishTime).toLocaleDateString()}
                    </p>
                  <Image
                      className="blogimg"
                      src={item.images[0].path}
                      alt="ok"
                      fluid
                    />
                    <h4  className="desription" style={{ marginTop:'5px'}}>{item.title}</h4>
                    <p className="p-0 m-0 text-center text-dark" style={{lineHeight:'1.5' ,marginTop:'5px', fontSize:'15px'}}> {item.description[0].Description}...</p>
                    <p className="lorem">
                      <span style={{color:"#0078b5"}} >Views:</span>
                      {item.views}
                    </p>
                    <Link
                      to={`/blog/${item._id}`}
                      onClick={() => {
                        console.log();
                      }}
                    >
                      <button className="readme">Read more</button>
                    </Link>
                  </div>
                </Col>
              </>
            ))):(
              <p className="mt-4">No blogs to display </p>
            )}
        </Row>
        <Row className="pagination-controls mt-4">
          <Col className="text-center">
            <Button
              variant="primary"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="mx-3">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="primary"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </Col>
        </Row>
</Col>

        <Col sm={12} md={4} xl={3}>
          <br></br>
            <div className="footer footer-stiky mt-4">
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
