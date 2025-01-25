import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footerblog from "./Footerblog";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use Formspree's default form handling
    fetch("https://formspree.io/f/mzzpqllk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        Swal.fire("Thanks for contacting us!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting the form");
      });
  };

  return (
    <>
      <Row>
        <Col sm={12} md={7} xl={9}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Enter your number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Your message here"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </Col>
        <Col sm={12} md={5} xl={3}>
          <Footerblog />
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;
