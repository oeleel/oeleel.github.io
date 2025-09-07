import React, { useEffect, useRef } from 'react';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';

function Home({ content }) {
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const summaryRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Staggered fade-in animation (removed carousel)
    const elements = [
      { ref: profileRef, delay: 0.1 },
      { ref: titleRef, delay: 0.3 },
      { ref: taglineRef, delay: 0.5 },
      { ref: summaryRef, delay: 0.7 },
      { ref: buttonsRef, delay: 0.9 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.classList.add('fade-in');
        }, delay * 1000);
      }
    });
  }, []);

  return (
    <Section id="home">
      <div className="hero center">
        <div ref={profileRef} className="profile-picture fade-in-ready">
          <div className="profile-placeholder">
            <img 
              src="/images/profile.jpeg" 
              alt="Leo Lee" 
              className="profile-image"
            />
          </div>
        </div>
        <h1 ref={titleRef} className="hero-title fade-in-ready">{content.name}</h1>
        <p ref={taglineRef} className="tagline fade-in-ready">{content.homepage.tagline}</p>
        <p ref={summaryRef} className="hero-summary fade-in-ready" style={{ maxWidth: 760, margin: "0 auto" }}>
          {content.homepage.summary}
        </p>
        <div ref={buttonsRef} className="btn-row center fade-in-ready" style={{ justifyContent: "center" }}>
          <Button className="primary" as="a" href="#projects">See Projects</Button>
          <Button as="a" href="#contact">Get in Touch</Button>
        </div>
      </div>
    </Section>
  );
}

export default Home;
