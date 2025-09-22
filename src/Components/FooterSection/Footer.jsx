import React from "react";
import "./FooterStyle.css"; 

const Footer = () => {
  return (
    <footer className="altFooter">
      <div className="altFooter__brand">
        <img 
          src="/unnamed.jpg" 
          alt="DYCI Logo" 
          className="altFooter__logo" 
        />
        <span className="altFooter__title">DYCI Museum</span>
      </div>

      <div className="altFooter__links">
        <a href="https://dyci.edu.ph/" target="_blank" rel="noopener noreferrer">
          Official Site
        </a>
        <a href="mailto:jigzgaerlan@gmail.com">Email Me</a>
        <a href="https://www.facebook.com/YangaCollege" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>

      <div className="altFooter__note">
        <small>
          Celebrating Carlo Acutis &mdash; Inspiring Faith and Innovation
        </small>
      </div>
    </footer>
  );
};

export default Footer;
