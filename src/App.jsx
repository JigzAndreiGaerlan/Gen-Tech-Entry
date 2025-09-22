import React from 'react'
import Main from './Components/MainSection/Main'
import AboutSection from './Components/AboutSection/AboutSection'
import Gallery from './Components/GallerySection/Gallery'
import Inspiration from './Components/InspirationSection/Inspiration'
import Timeline from './Components/TimelineSection/Timeline'
import Footer from './Components/FooterSection/Footer'


const App = () => {
  return (
    <div id="main" className='main'>
        <div className="YangaCredits">
            <span className="yangaLogo">
                <span className="yangaContainer"></span>
                <span className='yangaOptions' >
                    <ul>
                        <li>
                            <a className="fa-brands fa-facebook" href='https://www.facebook.com/YangaCollege' target='_blank'></a>       
                            <a className="fa-solid fa-home" href='https://dyci.edu.ph/' target='_blank'></a>       
                        </li>
                    </ul>
                </span>
            </span>
        </div>
        <div className="mainHeader">
            <span className="logo">
                <img src="image-removebg-preview (2).png" alt="Logo" />
            </span>
            <span className="navigations">
              <a href="#main">Home</a>
              <a href="#gallery">Gallery</a>
              <a href="#inspiration">Inspiration</a>
              <a href="#timeline">Timeline</a>
              <a href="#about">About</a>
            </span>
        </div>
      <div id="main">
  <Main />
</div>
<div id="about">
  <AboutSection />
</div>
<div id="gallery">
  <Gallery />
</div>
<div id="inspiration">
  <Inspiration />
</div>
<div id="timeline">
  <Timeline />
</div>

        <div id="footer">
          <Footer></Footer>
        </div>
        <div className="footerNote" style={{
          backgroundColor: 'rgb(51,51,51)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          textAlign: 'center'
        }}>
          <span>
            <p style={{
              height: '100%',
            }}>GEN TECH ENTRY</p>
          </span>
        </div>
    </div>
  )
}

export default App