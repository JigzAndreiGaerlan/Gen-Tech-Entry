import React, { useRef, useEffect, useState } from "react";
import "./TimelineStyle.css";

const events = [
  { year: "1991", text: "Born in London, May 3. Later moved to Milan." },
  { year: "1998", text: "First Holy Communion at 7, began daily Mass and Rosary." },
  { year: "2000s", text: "Created websites cataloguing Eucharistic miracles worldwide." },
  { year: "2006", text: "Diagnosed with leukemia, offered suffering for the Church. Died Oct 12" },
  { year: "2018", text: "Declared Venerable by Pope Francis." },
  { year: "2020", text: "Beatified in Assisi on Oct 10." }
];

const Timeline = () => {
  const itemsRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="timelineSection">
      <h2 className="timelineTitle">Timeline of Carlo Acutis</h2>
      <div className="timeline">
        {events.map((event, i) => (
          <div
            className={`timelineItem ${i % 2 === 0 ? "left" : "right"} ${
              visibleItems.includes(String(i)) ? "visible" : ""
            }`}
            key={i}
            ref={el => (itemsRef.current[i] = el)}
            data-index={i}
          >
            <div className="timelineContent">
              <div className="timelineCircle">{event.year}</div>
              <p className="timelineText">{event.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
