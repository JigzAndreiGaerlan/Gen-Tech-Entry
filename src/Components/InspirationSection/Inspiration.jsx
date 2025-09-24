import React, { useState, useRef, useEffect } from "react";
import "./InspirationStyles.css";

const slides = [
  {
    content:
      "Our goal must be the infinite, not the finite. The Infinite is our homeland. We are always awaited in Heaven.",
    explanation:
      "Carlo reminds us that life on earth is temporary, and everything we chase here — success, possessions, recognition — will eventually fade. He points us toward Heaven, our eternal home."
  },
  {
    content:
      "The more we receive the Eucharist, the more we become like Jesus, so that on earth we will have a foretaste of Heaven.",
    explanation:
      "Carlo saw the Eucharist as the center of his life. Holy Communion transforms us beyond symbolism — it helps us embody Christ’s love here on earth."
  },
  {
    content:
      "The only thing we need to ask of God in prayer is the desire to be holy.",
    explanation:
      "Holiness isn’t something we can achieve alone; it comes from God’s grace. Even wanting to grow closer to Him is the first step to a meaningful spiritual life."
  }
];

const Inspiration = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Auto-scroll every 10s
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`inspirationSection inspirationSlideIn${visible ? " visible" : ""}`}
    >
      {/* Navigation hover zones */}
      <div className="navZone left" onClick={prevSlide}></div>
      <div className="navZone right" onClick={nextSlide}></div>

      <div className="inspirationWrapper">
        <div className="quoteContainer">
          <h2 className="quote">“{slides[current].content}”</h2>
        </div>
        <div className="explanationContainer">
          <p>{slides[current].explanation}</p>
        </div>
      </div>

      <div className="dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Inspiration;
