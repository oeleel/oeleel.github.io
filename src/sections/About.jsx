import React, { useEffect, useRef } from 'react';
import Section from '../components/Section.jsx';

function About({ content }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for carousel
    if (carouselRef.current) {
      setTimeout(() => {
        carouselRef.current.classList.add('fade-in');
      }, 200);
    }
  }, []);

  return (
    <Section id="about" title="About Me">
      <div className="stack" style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Image Carousel */}
        <div ref={carouselRef} className="image-carousel fade-in-ready">
          <div className="carousel-container">
            <div className="carousel-track">
              <img src="/images/carousel1.jpg" alt="Project showcase 1" className="carousel-image" />
              <img src="/images/carousel2.jpg" alt="Project showcase 2" className="carousel-image" />
              <img src="/images/carousel3.jpg" alt="Project showcase 3" className="carousel-image" />
              <img src="/images/carousel4.jpg" alt="Project showcase 4" className="carousel-image" />
              <img src="/images/carousel5.jpg" alt="Project showcase 5" className="carousel-image" />
              {/* Duplicate first few images for seamless loop */ }
              <img src="/images/carousel1.jpg" alt="Project showcase 1" className="carousel-image" />
              <img src="/images/carousel2.jpg" alt="Project showcase 2" className="carousel-image" />
              <img src="/images/carousel3.jpg" alt="Project showcase 3" className="carousel-image" />
            </div>
          </div>
        </div>

        <p className="center muted" style={{ marginTop: 0 }}>
          {content.about.summary}
        </p>
      </div>
    </Section>
  );
}

export default About;
