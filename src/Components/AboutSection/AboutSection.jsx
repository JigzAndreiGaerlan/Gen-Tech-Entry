import React, { useRef, useEffect, useState } from 'react';
import './AboutStyle.css';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`AboutSection aboutSlideIn${visible ? ' visible' : ''}`}
    >
      <div className='black'></div>
      <div className='yellow'>
        <img src="Carlo.jpg" alt="Carlo Acutis Photo" />
      </div>
      <div className='AboutParagraph'>
        <span className='AboutHeader'>
          <h1 className='AboutText'>About</h1>
          <h1 className='AboutName'> Carlo Acutis</h1>
        </span>
        <span className='AboutBody'>
          <p>
            Carlo Acutis was born in London, England, on May 3, 1991, to Italian parents. He was baptized a month later in Milan, Italy, where his family moved shortly after his birth. From a young age, Carlo exhibited a deep love for the Eucharist and a strong devotion to the Virgin Mary. He attended Catholic schools and was known for his kindness, generosity, and cheerful disposition.
            <br /><br />
            Carlo had a passion for computers and technology. He taught himself programming and web design, using his skills to create websites that documented Eucharistic miracles from around the world. His most famous project is the website "Eucharistic Miracles of the World," which he created to promote devotion to the Eucharist and educate others about these miraculous events.
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutSection;
