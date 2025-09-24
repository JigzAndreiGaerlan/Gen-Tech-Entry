import React, { useState, useEffect } from 'react';
import './Styles.css';

const options = ["Home", "About", "Gallery", "Museum Tour", "Inspiration", "Timeline"];

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loadingScreen">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mainBody">
        <div className="mainShowcase">
          <span className='bodyLogo'>
            <img src="image-removebg-preview (2).png" alt="Logo" />
          </span>
          <span className='headbodyText'>
            <h1>Blessed</h1>
          </span>
          <span className='paragraphText'>
            <p style={{ color: '#fff' }}>Carlo Acutis</p>
          </span>
          <span className="yangaIntroduction">
            <p>
              Welcome to Dr. Yanga's Colleges' Digital Exhibit where you can learn more about Blessed Carlo Acutis and his life.
            </p>
          </span>
        </div>
      </div>
      <div className="mainFooter">
        <div className='footerText'>
          <p>Ask questions, get answers, know me</p>
        </div>
        <div className='footerDiv1'>
          <p className='developText'>
            Developed by:
            <a href='https://www.facebook.com/drei.grln/' target='_blank'>
              <i className='fa-brands fa-facebook'></i>Andrei Gaerlan
            </a>
          </p>
        </div>
        <div className='footerDiv2'>
          <p className='contactText'>
            Contact me: <a href=''><i className='fa-solid fa-envelope fa-gmail'></i> jigzgaerlan@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
