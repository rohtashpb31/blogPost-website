import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.privacyContainer}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Privacy Policy</h1>
        <p style={styles.introText}>
          We value your privacy and are committed to protecting your personal information. This policy outlines how we handle your data.
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.card} id="info">
          <h2 style={styles.subHeading}>1. Information We Collect</h2>
          <p style={styles.paragraph}>
            We collect personal information such as your name, email address, and usage data when you interact with our services.
          </p>
        </div>

        <div style={styles.card} id="use">
          <h2 style={styles.subHeading}>2. How We Use Your Information</h2>
          <p style={styles.paragraph}>
            Your information helps us enhance our services and provide you with a personalized experience.
          </p>
        </div>

        <div style={styles.card} id="cookies">
          <h2 style={styles.subHeading}>3. Cookies</h2>
          <p style={styles.paragraph}>
            We use cookies to improve your experience and analyze site usage. You can manage your cookie preferences through your browser settings.
          </p>
        </div>

        <div style={styles.card} id="protection">
          <h2 style={styles.subHeading}>4. Data Protection</h2>
          <p style={styles.paragraph}>
            We implement strong security measures to safeguard your data from unauthorized access and misuse.
          </p>
        </div>

        <div style={styles.card} id="rights">
          <h2 style={styles.subHeading}>5. Your Rights</h2>
          <p style={styles.paragraph}>
            You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
          </p>
        </div>
        <div style={styles.card} id="rights">
          <h2 style={styles.subHeading}>5. Your Rights</h2>
          <p style={styles.paragraph}>
            You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
          </p>
        </div>
        <div style={styles.card} id="rights">
          <h2 style={styles.subHeading}>5. Your Rights</h2>
          <p style={styles.paragraph}>
            You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
          </p>
        </div>

        <div style={styles.card} id="contact">
          <h2 style={styles.subHeading}>6. Contact Us</h2>
          <p style={styles.paragraph}>
            For questions regarding this policy, please reach out to us at <a style={styles.link} href="mailto:privacy@yourwebsite.com">privacy@yourwebsite.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  privacyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
    padding: '0',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    background: 'linear-gradient(to bottom right, #f0f4f8, #d9e6f2)',
    color: 'black',
    padding: '40px',
    borderRadius: '0',
    width: '100%',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '0',
  },
  introText: {
    fontSize: '1.2rem',
    marginTop: '10px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    width: '100%',
  },
  card: {
    backgroundColor: "#ffffff",
    padding: '15px',
    border: "1px solid #ddd",
    borderRadius: '10px',
    color: '#333',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  subHeading: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#444',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: '0',
  },
  link: {
    color: '#4A90E2',
    textDecoration: 'underline',
  },
};

// Responsive Styles
const responsiveStyles = {
  '@media (max-width: 1200px)': {
    heading: {
      fontSize: '2.2rem',
    },
    introText: {
      fontSize: '1.1rem',
    },
    subHeading: {
      fontSize: '1.6rem',
    },
    paragraph: {
      fontSize: '0.9rem',
    },
  },
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2rem',
    },
    introText: {
      fontSize: '1rem',
    },
    subHeading: {
      fontSize: '1.4rem',
    },
    paragraph: {
      fontSize: '0.85rem',
    },
  },
  '@media (max-width: 480px)': {
    header: {
      padding: '20px',
    },
    content: {
      padding: '10px',
    },
    heading: {
      fontSize: '1.8rem',
    },
    introText: {
      fontSize: '0.9rem',
    },
    subHeading: {
      fontSize: '1.2rem',
    },
    paragraph: {
      fontSize: '0.8rem',
    },
  },
};

export default PrivacyPolicy;

