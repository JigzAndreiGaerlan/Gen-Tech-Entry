import React from 'react'
import Main from './Components/MainSection/Main'
import AboutSection from './Components/AboutSection/AboutSection'
import Gallery from './Components/GallerySection/Gallery'
import Inspiration from './Components/InspirationSection/Inspiration'
import Timeline from './Components/TimelineSection/Timeline'
import Footer from './Components/FooterSection/Footer'

const options = [
  { name: "Home", link: "#main" },
  { name: "About", link: "#about" },
  { name: "Gallery", link: "#gallery" },
  { name: "Inspiration", link: "#inspiration" },
  { name: "Timeline", link: "#timeline" }
];
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
                <ul>
                    <li>
                    {options.map((option, id) => (
  <a href={option.link} key={id}>{option.name}</a>
))}
                    </li>
                </ul>
            </span>
        </div>
      <div>
        <Main></Main>
      </div>
      <div id="about">
        <AboutSection></AboutSection>
      </div>
      <div id="gallery">
        <Gallery></Gallery>
      </div>
      <div id="inspiration">
        <Inspiration></Inspiration>
        </div>
        <div id="timeline">
          <Timeline></Timeline>
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