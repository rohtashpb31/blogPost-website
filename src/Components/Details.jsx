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

export default function Details() {
  const { id } = useParams(); // Extract the id from the URL
  const [blog, setBlog] = useState(null);
  const [Title, setTitle] = useState();
  const [Time, setTime] = useState();

  useEffect(() => {
    fetchBlogDetail(id);
  }, [id]);

  const fetchBlogDetail = (id) => {
    fetch(`http://localhost:80/post/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data[0].content[0].content);
        setTitle(data[0].title);
        setTime(data[0].publishTime);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  console.log(blog);
  if (!blog) {
    return <p>Loading...</p>;
  }

  const styles = {
    container: {
      maxWidth: "100%", // Max width with margin for small screens
      margin: "10px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "1.8em",
      textAlign: "center",
    },
    date: {
      fontSize: "1em",
      textAlign: "center",
      color: "#888",
    },
    content: {
      fontSize: "1em",
      lineHeight: "1.6",
      marginTop: "10px",
    },
    tags: {
      marginTop: "20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    tag: {
      display: "inline-block",
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "5px 10px",
      margin: "5px",
      borderRadius: "3px",
      fontSize: "0.9em",
      
    },
    "@media (max-width: 768px)": {
      container: {
        padding: "10px",
        maxWidth: "100%", // Wider margins for smaller screens
      },
      title: {
        fontSize: "1.6em",
      },
      content: {
        fontSize: "0.95em",
      },
      tag: {
        fontSize: "0.85em",
      },
    },
    "@media (max-width: 480px)": {
      container: {
        padding: "5px",
        maxWidth: "100%", // Full width for very small screens
      },
      title: {
        fontSize: "1.4em",
      },
      content: {
        fontSize: "0.9em",
      },
      tag: {
        fontSize: "0.8em",
      },
    },
  };
 
  return (
    <>
      <div className="blogs">
        <Row>
          <Col sm={12} md={7} xl={9}>
            {/* <div className="play ">
            <h2 className="skd">{blog.attributes.Articles}</h2>
            <div className="line"></div>
            <div className="paragraph">
              <p>
              {blog.attributes.paragraph1}
              </p>
              <p>
              {blog.attributes.paragraph2}
              </p>
              <br />
              <div className="line2"></div>
              <h3>Benefits of Geranium Essential Oil for Skin:</h3>
              <br />
              <div className="line2"></div>
              <p>
              {blog.attributes.paragraph3}
              </p>
              <p>
              {blog.attributes.paragraph4}
              </p>
              <p>
              {blog.attributes.paragraph5}
              </p>
              <p>
              {blog.attributes.paragraph6}
              </p>
              <Image
                src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/22-960x640.jpg"
                alt="img"
                fluid
              />
              <br />
              <br />
              <p>
              {blog.attributes.points}
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
          </div> */}
            <div style={styles.container}>
              <h1 style={styles.title}>{Title}</h1>
              <p style={styles.date}>{Time}</p>
              {/* Render HTML content safely */}
              <div className="imagescenter img-fluid"
                dangerouslySetInnerHTML={{ __html: blog }}
                style={styles.content}
              />
              {/* Display tags as individual elements */}
            </div>
          </Col>
          <Col sm={12} md={5} xl={3}>
            <div className="footer footer-stiky">
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
      <br />
    </>
  );
}
