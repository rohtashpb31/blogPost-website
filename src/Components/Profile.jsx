import React, { useEffect, useState } from "react";
import LoginForm from "./LoginFrom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Image, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import Swal from "sweetalert2";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [Admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedIn(true);
      fetchProfile();
      fetchBlogs();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchProfile = () => {
    fetch("http://localhost:80/profile")
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
        console.log(data);
        setAdmin(data.isAdmin);
        setLoadingProfile(false);
      })
      .catch((error) => {
        console.log("Error fetching profile:", error);
        setLoadingProfile(false);
      });
  };

  const fetchBlogs = () => {
    fetch("http://localhost:80/article/all")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.posts);
        setLoadingBlogs(false);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
        setLoadingBlogs(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
    navigate(window.scrollTo({ top: 0, behavior: "smooth" }));

    Toastify({
      text: "Logout successful",
      className: "info",
      offset: { x: 50, y: 10 },
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();

    fetch("http://localhost:80/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Successfully logged out" }),
    })
      .then((response) => response.json())
      .catch((error) => console.log("Error logging out:", error));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this blog permanently?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:80/article/delete/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Blog post deleted successfully") {
              Swal.fire("Deleted!", "Your blog has been deleted.", "success");
              fetchBlogs(); // Refresh blog list
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
  const styless = {
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
      {isLoggedIn ? (
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={8} xl={9}>
              <br></br>
              <div style={styles.container}>
                <div style={styles.header}>
                  <img
                    style={styles.profilePic}
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R134006824&ga=GA1.1.1430684539.1726610342&semt=ais_hybrid"
                    alt="Profile"
                  />

                  {loadingProfile ? (
                    <p>Loading profile...</p>
                  ) : (
                    <>
                      <h1 style={styles.name}>{profileData?.name}</h1>
                      <p style={styles.bio}>
                        Yoga Instructor | Wellness Enthusiast | Traveler
                      </p>
                    </>
                  )}
                </div>
                <br></br>
                <div style={styles.details} className="mb-3">
                  <h2>About Me</h2>
                  <p>
                    "Hi, I'm {profileData?.name}. I love sharing my thoughts and
                    experiences on blogging."
                  </p>
                  <h2>Contact Information</h2>
                  <p>
                    <strong>UserId:</strong> {profileData?._id}
                  </p>
                  <p>
                    <strong>UserName:</strong> {profileData?.username}
                  </p>
                  <p>
                    <strong>Email:</strong> {profileData?.email}
                  </p>
                  <p>
                    <strong>Otp Verified:</strong>{" "}
                    {profileData?.otp?.verified ? "Verified" : "Not Verified"}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong>{" "}
                    {new Date(profileData?.dob).toLocaleDateString()}
                  </p>

                  <div style={styles.socialLinks}>
                    <a
                      style={styles.link}
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <a
                      style={styles.link}
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                  {Admin ? (
                    <div className="d-flex">
                      <button onClick={handleLogout} style={StyleSheetnew}>
                        Logout
                      </button>
                      <Link to={"/admin"}>
                        <button style={StyleSheetnew} onClick={()=>{
                          window.scrollTo({top:'0',behavior:'smooth'})
                        }} className="ms-3"> Admin</button>
                      </Link>
                    </div>
                  ) : (
                    <button onClick={handleLogout} style={StyleSheetnew}>
                      Logout
                    </button>
                  )}
                </div>

                {loadingBlogs ? (
                  <p>Loading blogs...</p>
                ) : (
                  <>
                    <br></br>
                    <h2 className="text-center">All Posts</h2>
                    <br></br>
                    <Row>
                      {blogs ? (
                        blogs.map((item) => (
                          <Col
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
                            key={item._id}
                            className="mb-4"
                          >
                            <div className="blog-card">
                              <Image
                                src={item.images[0]?.path}
                                fluid
                                className="blog-image"
                              />
                              <h5 className="blog-title">{item.title}</h5>
                              <p className="blog-views">Views: {item.views}</p>
                              <p className="blog-date">
                                PublishTime:{" "}
                                {new Date(
                                  item.publishTime
                                ).toLocaleDateString()}
                              </p>
                              <Link to={`/blog/${item._id}`}>
                                <button className="read-more-button">
                                  Read more
                                </button>
                              </Link>
                              <Button
                                variant="danger"
                                className="delete-button"
                                onClick={() => handleDelete(item._id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </Col>
                        ))
                      ) : (
                        <p>No blogs available at the moment.</p>
                      )}
                    </Row>
                  </>
                )}
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={3}>
              <br></br>
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
                <div className="logr">
                  <div style={styless.socialIcons}>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={styless.socialIcon}
                      />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={styless.socialIcon}
                      />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        style={styless.socialIcon}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/rohtashpb31/?hl=en#/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={styless.socialIcon}
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
                <br />
                <div className="line3"></div>
                <div className="about">
                  <p>LIKE US ON FACEBOOK</p>
                </div>
                <div className="line3"></div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

// Inline styles
const StyleSheetnew = {
  borderRadius: "6px",
  padding: "8px 16px",
  marginTop: "10px",
  color: "white",
  backgroundColor: "#1075ff",
  border: "none",
  width: "100%",
  maxWidth: "150px",
};

const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  profilePic: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #333",
  },
  name: {
    fontSize: "28px",
    margin: "10px 0",
  },
  bio: {
    fontStyle: "italic",
    color: "#666",
  },
  details: {
    textAlign: "left",
  },
  socialLinks: {
    marginTop: "20px",
  },
  link: {
    marginRight: "15px",
    textDecoration: "none",
    color: "#0077b5",
    fontSize: "18px",
  },
};

export default ProfilePage;
