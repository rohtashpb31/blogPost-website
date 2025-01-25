import React from "react";

const WriteUsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Write for Us</h1>
      <p style={styles.paragraph}>
        We would love to hear from you! Fill out the form below or visit us at our office.
      </p>
      <br></br>
      <div style={styles.flexContainer}>
        {/* Left Section: Office Information + Map */}
        <div style={styles.mapSection}>
          <h3 style={styles.formHeader} className="p-0 m-1">Our Office</h3>
          <p className="p-0 m-1">City Name, Country</p>
          <p className="p-0 m-1">Email: info@yogastudio.com</p>
          <p className="p-0 m-1">Phone: +123 456 7890</p>
          <br></br>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878184.9642169427!2d76.66462300703787!3d30.70687178182705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1727292418642!5m2!1sen!2sin"
            style={styles.map}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Section: Contact Form */}
        <div style={styles.formSection}>
          <h2 style={styles.formHeader}>Send Us a Message</h2>
          <form style={styles.form}>
            <label style={styles.label}>Your Name:</label>
            <input type="text" style={styles.input} placeholder="Your Name" />

            <label style={styles.label}>Your Email:</label>
            <input type="email" style={styles.input} placeholder="Your Email" />

            <label style={styles.label}>Message:</label>
            <textarea style={styles.textarea} placeholder="Your Message"></textarea>

            <button type="submit" style={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    padding: "5px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "38px",
    color: "#333",
  },
  paragraph: {
    fontSize: "16px",
    color: "#666",
    margin: "20px 0",
    textAlign: "center",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
  },
  mapSection: {
    flex: "1",
    marginRight: "30px",
    marginBottom: "20px",
  },
  formSection: {
    flex: "1",
    marginBottom: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  subHeader: {
    fontSize: "24px",
    color: "#333",
  },
  map: {
    width: "100%",
    height: "300px",
    border: "none",
    marginTop: "10px",
  },
  formHeader: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    minHeight: "100px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#1075ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default WriteUsPage;
