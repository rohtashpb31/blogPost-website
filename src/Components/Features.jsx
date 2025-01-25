// import React from 'react';
// import NavBars from './ NavBars';


// const Features = () => {
//   return (
//     <>
   
//     <div className="features-container">
//       <h1 className="features-title">Our Features</h1>
//       <div className="features-grid">
//         <div className="feature-card">
//           <h2>Responsive Design</h2>
//           <p>
//             Our blog is fully responsive, ensuring a seamless experience on any device.
//           </p>
//         </div>
//         <div className="feature-card">
//           <h2>Easy Navigation</h2>
//           <p>
//             Navigate effortlessly through posts and categories with our intuitive UI.
//           </p>
//         </div>
//         <div className="feature-card">
//           <h2>SEO Optimized</h2>
//           <p>
//             Enjoy higher visibility with our SEO-friendly blog structure.
//           </p>
//         </div>
//         <div className="feature-card">
//           <h2>Fast Loading</h2>
//           <p>
//             Our blog is optimized for speed, providing a fast loading experience.
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Features;


import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const PricingPage = () => {
  return (
    <>
      <Container style={styles.container}>
        <h1 style={styles.title}>Membership Plans</h1>
        
        <Row>
          <Col md={4} style={styles.column}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title style={styles.cardTitle}>Basic Plan</Card.Title>
                <Card.Text style={styles.price}>$19/month</Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> Access to all online classes<br />
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> Monthly newsletter<br />
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> Community access
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                  Swal.fire("Membership Plans are not start")
                }} style={styles.button}>Join Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={styles.column}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title style={styles.cardTitle}>Standard Plan</Card.Title>
                <Card.Text style={styles.price}>$39/month</Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> All Basic Plan features<br />
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> 2 personal training sessions<br />
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> Access to workshops
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                  Swal.fire("Membership Plans are not start")
                }} style={styles.button}>Join Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={styles.column}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title style={styles.cardTitle}>Premium Plan</Card.Title>
                <Card.Text style={styles.price}>$59/month</Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> All Standard Plan features<br />
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> Unlimited access to all classes<br />
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} /> Free merchandise
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                  Swal.fire("Membership Plans are not start")
                }} style={styles.button}>Join Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 style={styles.subTitle}>Why Choose Us?</h2>
        <Row>
          <Col md={6} style={styles.column}>
            <Card style={styles.benefitCard}>
              <Card.Body>
                <Card.Title style={styles.benefitTitle}>Experienced Instructors</Card.Title>
                <Card.Text>
                  Our certified instructors are dedicated to providing you with the best yoga experience. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, id tenetur assumenda hic nemo consequuntur neque. Iste nesciunt qui cum provident impedit accusantium, sapiente consequatur consequuntur deleniti, distinctio, possimus ab.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} style={styles.column}>
            <Card style={styles.benefitCard}>
              <Card.Body>
                <Card.Title style={styles.benefitTitle}>Flexible Scheduling</Card.Title>
                <Card.Text>
                  Enjoy classes that fit your schedule. We offer a variety of times and formats to suit your needs.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil distinctio nulla dolorum, id dolor animi corporis unde eaque cum deleniti architecto numquam deserunt. Repudiandae debitis nesciunt, dignissimos exercitationem eius provident.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        
      </Container>
    </>
  );
};



const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.5rem',
    color: 'black',
  },
  subTitle: {
    textAlign: 'center',
    margin: '30px 0',
    fontSize: '2rem',
    color: 'black',
  },
  column: {
    marginBottom: '20px',
  },
  card: {
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    background: 'linear-gradient(to bottom right, #f0f4f8, #d9e6f2)',
  },
  benefitCard: {
    border: '1px solid #e9ecef',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    padding: '15px',
    textAlign: 'center',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: 'black',
  },
  price: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#495057',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  icon: {
    color: 'black',
    marginRight: '8px',
  },
  benefitTitle: {
    fontSize: '1.5rem',
    color: '#007bff',
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#e9ecef',
    borderRadius: '10px',
  },
  footerTitle: {
    fontSize: '1.8rem',
    color: '#495057',
  },
};

export default PricingPage;
