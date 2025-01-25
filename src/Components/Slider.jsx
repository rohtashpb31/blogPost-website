
// import Carousel from 'react-bootstrap/Carousel';
// import React, { useState } from 'react'
// import { Image } from 'react-bootstrap';
// import Slider1 from '../assest/images/sliderImage.png'
// import Slider2 from '../assest/images/sliderImage2.png'
// export default function Slider() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };
//   return (
//     <>
//        <Carousel activeIndex={index} onSelect={handleSelect} className='mt-5 mb-5'>
//       <Carousel.Item>
//       <div className='Slider-img'>
//             <Image src={Slider1} alt="img" />
//           </div>
        
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className='Slider-img'>
//             <Image src={Slider2} alt="img" />
//           </div>
        
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className='Slider-img'>
//           <Image src="https://img.freepik.com/free-vector/flat-design-graphic-designer-facebook-cover-template_23-2150455664.jpg?t=st=1725783263~exp=1725786863~hmac=98345ac50bd47f2f4cd2a4dbff3117810e84837b9386c95f1e5c16fdb0d80e28&w=1800" alt="img" />
//          </div>
        
//       </Carousel.Item>
//     </Carousel>
//     </>
//   )
// }

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// const Slider = () => {
//   return (
//     <>
//     <div style={styles.sliderContainer}>
//       <Carousel indicators={true} controls={true} interval={5000} style={styles.carousel}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide1-bckg.jpg"
//             alt="Innovative Tech Trends"
//             style={styles.image}
//           />
//           <Carousel.Caption style={styles.caption}>
//             <h3 style={styles.title}>Innovative Tech Trends</h3>
//             <p style={styles.description}>Explore the latest trends in technology and how they are transforming our world.</p>
//             <Link to={"/homepageblog"}  onClick={() => { 
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
//     console.log('Navigating to blog post'); 
//   }} style={styles.readMore}>Read More</Link>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383051.jpg?t=st=1726615782~exp=1726619382~hmac=d71f11ca2029995968b4850f4b8e2fb59a31386e62cf6010d508826ced8aba67&w=1480"
//             alt="The Art of Wellness"
//             style={styles.image}
//           />
//           <Carousel.Caption style={styles.caption}>
//             <h3 style={styles.title}>The Art of Wellness</h3>
//             <p style={styles.description}>Discover the beauty of holistic wellness and how it can enrich your life.</p>
//             <Link to={"/homepageblog"}  onClick={() => { 
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
//     console.log('Navigating to blog post'); 
//   }} style={styles.readMore}>Read More</Link>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://img.freepik.com/free-photo/young-hipster-beautiful-couple-love-walking-mountains_285396-2232.jpg?t=st=1726616658~exp=1726620258~hmac=3f616b2e2915eb2489a3c6950f4299ab9f8aedbe69b650385633f55b8fc24f2f&w=1800"
//             alt="Journey Through Innovation"
//             style={styles.image}
//           />
//           <Carousel.Caption style={styles.caption}>
//             <h3 style={styles.title}>Journey Through Innovation</h3>
//             <p style={styles.description}>Dive into the latest advancements in innovation and how they impact our daily lives.</p>
//             <Link to={"/homepageblog"}  onClick={() => { 
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
//     console.log('Navigating to blog post'); 
//   }} style={styles.readMore}>Read More</Link>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//     </>
//   );
// };

// const styles = {
//   sliderContainer: {
//     width: '100%',
//     height: '500px', // Default height for larger screens
//     overflow: 'hidden',
//     backgroundColor: '#f8f9fa', // Light grey background
//   },
//   carousel: {
//     height: '100%',
//   },
//   image: {
//     height: '500px', // Default height for larger screens
//     objectFit: 'cover',
//     width: '100%',
//     '@media(max-width: 768px)': {
//       height: '300px', // Reduced height for mobile screens
//     },
//   },
//   caption: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//     color: '#ffffff',
//     padding: '20px',
//     borderRadius: '8px',
//   },
//   title: {
//     fontSize: '1.5rem',
//     marginBottom: '0.5rem',
//     '@media(max-width: 768px)': {
//       fontSize: '1.2rem', // Adjust font size for mobile
//     },
//   },
//   description: {
//     fontSize: '1rem',
//     marginBottom: '1rem',
//     '@media(max-width: 768px)': {
//       fontSize: '0.9rem', // Adjust font size for mobile
//     },
//   },
//   readMore: {
//     display: 'inline-block',
//     color: '#ffffff',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//     backgroundColor: '#007BFF',
//     padding: '3px 10px',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s ease',
//     '@media(max-width: 768px)': {
//       padding: '2px 8px', // Smaller padding for mobile
//     },
//   },
// };


// export default Slider;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Typewriter from 'react-typewriter-effect'; // Import the typewriter effect
import { text } from '@fortawesome/fontawesome-svg-core';

const Slider = () => {
  return (
    <>
      <div style={styles.sliderContainer}>
        <Carousel indicators={true} controls={true} interval={5000} style={styles.carousel}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/people-portrait-with-plane-flying-sky_23-2149520423.jpg?t=st=1728240290~exp=1728243890~hmac=1b90cbe7dcbe4301908619742c30a67c7af2a678911c928efa945d8d519a904e&w=1800"
              alt="Innovative Tech Trends"
              style={styles.image}
            />
            <Carousel.Caption style={styles.caption}>
              <h3 style={styles.title}>
                {/* Typewriter effect on the title */}
                <Typewriter
                  text="Innovative Tech Trends"
                  typeSpeed={80} // Speed of typing effect
                  cursorColor="white" // Cursor color
                />
              </h3>
              <p style={styles.description}>Explore the latest trends in technology and how they are transforming our world.</p>
              <Link to={"/homepageblog"} onClick={() => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
                console.log('Navigating to blog post'); 
              }} style={styles.readMore}>Read More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383051.jpg?t=st=1726615782~exp=1726619382~hmac=d71f11ca2029995968b4850f4b8e2fb59a31386e62cf6010d508826ced8aba67&w=1480"
              alt="The Art of Wellness"
              style={styles.image}
            />
            <Carousel.Caption style={styles.caption}>
              <h3 style={styles.title}>
                {/* Typewriter effect on the title */}
                <Typewriter  className='typetext'
                  text="The Art of Wellness"
                  typeSpeed={80} // Speed of typing effect
                  cursorColor="white"
                ></Typewriter>
              </h3>
              <p style={styles.description}>Discover the beauty of holistic wellness and how it can enrich your life.</p>
              <Link to={"/homepageblog"} onClick={() => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                console.log('Navigating to blog post'); 
              }} style={styles.readMore}>Read More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/young-hipster-beautiful-couple-love-walking-mountains_285396-2232.jpg?t=st=1726616658~exp=1726620258~hmac=3f616b2e2915eb2489a3c6950f4299ab9f8aedbe69b650385633f55b8fc24f2f&w=1800"
              alt="Journey Through Innovation"
              style={styles.image}
            />
            <Carousel.Caption style={styles.caption}>
              <h3 style={styles.title}>
                {/* Typewriter effect on the title */}
                <Typewriter
                  text="Journey Through Innovation"
                  typeSpeed={80}
                  cursorColor="white"
                />
              </h3>
              <p style={styles.description}>Dive into the latest advancements in innovation and how they impact our daily lives.</p>
              <Link to={"/homepageblog"} onClick={() => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                console.log('Navigating to blog post'); 
              }} style={styles.readMore}>Read More</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

const styles = {
  sliderContainer: {
    width: '100%',
    height: '500px', // Default height for larger screens
    overflow: 'hidden',
    backgroundColor: '#f8f9fa', // Light grey background
  },
  carousel: {
    height: '100%',
  },
  image: {
    height: '500px', // Default height for larger screens
    objectFit: 'cover',
    width: '100%',
    '@media(max-width: 768px)': {
      height: '300px', // Reduced height for mobile screens
    },
  },
  caption: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    color: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    '@media(max-width: 768px)': {
      fontSize: '1.2rem', // Adjust font size for mobile
    },
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1rem',
    '@media(max-width: 768px)': {
      fontSize: '0.9rem', // Adjust font size for mobile
    },
  },
  readMore: {
    display: 'inline-block',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
    backgroundColor: '#007BFF',
    padding: '3px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    '@media(max-width: 768px)': {
      padding: '2px 8px', // Smaller padding for mobile
    },
  },
};

export default Slider;
