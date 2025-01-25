import React from 'react';

const Loader = () => {
  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    position: 'relative',
  };

  const ringStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '10px solid #0078b5',
    borderTop: '10px solid transparent',
    animation: 'spin 1.5s linear infinite',
    position: 'absolute',
  };

  const innerRingStyle = {
    ...ringStyle,
    width: '70px',
    height: '70px',
    border: '8px solid #ff5722',
    borderTop: '8px solid transparent',
    animation: 'spinReverse 1.5s linear infinite',
    animationDelay: '-0.5s',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const keyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes spinReverse {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  `;

  return (
    <div style={loaderContainerStyle}>
      <style>{keyframes}</style>
      <div style={ringStyle}></div>
      <div style={innerRingStyle}></div>
      <div style={textStyle}>Loading...</div>
    </div>
  );
};

export default Loader;
