import React, { useRef, useEffect, useState } from 'react';
import './GalleryStyles.css';

const Gallery = () => {
  const galleryRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0,
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className={`mainGallery gallerySlideIn${visible ? ' visible' : ''}`}
    >
      <div className="galleryHeader">
        <span style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
        }}>
          <h1 style={{
            color: '#958b81',
            fontWeight: '1000',
            padding: '0px',
            margin: '0px',
            fontSize: '3.5rem',
          }}>
            Carlo Acutis
          </h1>
          <p style={{
            padding: '0px',
            margin: '0px',
            fontSize: '3rem',
            color: '#d9b088',
            fontWeight: '1000',
          }}>
            Gallery
          </p>
        </span>
        <span className='pForIntro' style={{
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
        }}>
          <p style={{
            color: '#cfcfcfff',
            fontSize: '0.8rem',
            maxWidth: '60%',
            margin: 0,
          }}>
            Explore a curated selection of images that capture the essence of Carlo Acutis's life, faith, and legacy. Each photograph tells a story of his devotion, his passion for technology, and his unwavering commitment to sharing the message of the Eucharist with the world.
          </p>
        </span>
      </div>

      <div className="galleryContent" style={{ marginTop: '25px' }}>
        <div className="Photocontainer1">
          <img src="Top Photo (statue of Carlo with backpack, wheat background, framed articles).jpg" alt="Top Photo (statue of Carlo with backpack, wheat background, framed articles)" />
          <h1>Captures Carlo’s youthful spirit and dedication to learning, symbolizing his journey of faith intertwined with everyday life.</h1>
        </div>
        <div className="Photocontainer2">
          <img src="Bottom Left (stained glass with Carlo, computer, and internet icons).jpg" alt="Bottom Left (stained glass with Carlo, computer, and internet icons)" />
          <h1>Highlights Carlo’s embrace of modern tools to share timeless messages, merging faith with the digital world.</h1>
        </div>
        <div className="Photocontainer3">
          <img src="Bottom Middle (portrait of Carlo with floral offering).jpg" alt="Bottom Middle (portrait of Carlo with floral offering)" />
          <h1>Reflects Carlo’s devotion and reverence, portraying him as a young saint offering his heart to God.</h1>
        </div>
        <div className="Photocontainer4">
          <img src="Bottom Right (painting of Carlo holding a laptop with Jesus beside him).jpg" alt="Bottom Right (painting of Carlo holding a laptop with Jesus beside him)" />
          <h1>Illustrates Carlo’s connection with Christ and his mission to evangelize through technology, bridging the sacred and the contemporary.</h1>
        </div>
      </div>

      <div className="descriptionContent">
        <span>
          <p>
            This website highlights <a href="https://dyci.edu.ph/" target='_blank' style={{
              display: 'inline', color: '#d9b088', textDecoration: 'underline'
            }}>Dr. Yanga's Colleges Inc.</a> special school exhibit dedicated to Carlo Acutis. It showcases the life, achievements, and spiritual legacy of Carlo Acutis through curated galleries and interactive content. The digital platform allows visitors to explore the exhibit and learn about Carlo's inspiring story within the context of the school's museum.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Gallery;
