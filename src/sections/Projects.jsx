import React, { useState, useEffect, useRef, useCallback } from 'react';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

function Projects({ content }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        setExpandedIndex(null);
      }
    }

    if (expandedIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedIndex]);

  const handleToggle = useCallback((index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  return (
    <Section id="projects" title="Projects">
      <div className="cards" role="list" ref={projectsRef}>
        {content.projects.map((p, i) => (
          <ProjectCard 
            key={p.title} 
            project={p} 
            isExpanded={expandedIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
