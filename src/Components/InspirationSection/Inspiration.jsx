import React, { useState, useRef, useEffect } from 'react';
import './InspirationStyles.css';

const slides = [
  {
    content: "Il nostro obiettivo deve essere l’infinito e non il finito. L’Infinito è la nostra patria. In Cielo siamo sempre attesi.",
    explanation: "Carlo reminds us that life on earth is temporary, and everything we chase here, success, possessions, recognition will eventually fade. When he says “Our goal must be the infinite and not the finite,” he points us toward Heaven..."
  },
  {
    content: "Quanto più riceviamo l’Eucaristia, tanto più diventiamo simili a Gesù, così che sulla terra avremo un anticipo del Cielo.",
    explanation: "Carlo saw the Eucharist as the center of his life. When he says, “The more Eucharist we receive, the more we will become like Jesus,” he is teaching that Holy Communion is not just a symbol, it truly transforms us..."
  },
  {
    content: "L’unica cosa che dobbiamo chiedere a Dio, nella preghiera, è il desiderio di essere santi.",
    explanation: "Carlo emphasizes that holiness isn’t something we can achieve on our own, it comes from God’s grace. When he says, “The only thing we have to ask God for… is the desire to be holy,” he reminds us that even just wanting to grow closer..."
  }
];

const Inspiration = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0,
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`inspirationSection inspirationSlideIn${visible ? ' visible' : ''}`}
    >
      <button className="navButton" onClick={prevSlide}>Previous</button>

      <div className="inspirationContent">
        <div className="slider">{slides[current].content}</div>
        <div className="inspirationExplanation">{slides[current].explanation}</div>
      </div>

      <button className="navButton" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Inspiration;
