import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Error404 = () => {
  useEffect(() => {
    const animateElement = document.querySelector(".messages");
    animateElement.classList.add("animate__animated", "animate__bounceIn");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth) * 10;
      const moveY = (clientY / window.innerHeight) * 10;
      animateElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="error-page">
      <div className="containers">
        <div className="messages">
          <h1>404</h1>
          <p>Oops! The page you're looking for can't be found.</p>
        </div>
        <div className="error-illustrations">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="Lost"
          />
        </div>
        <Link to="/" className="home-links">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
