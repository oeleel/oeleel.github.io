import React, { useState } from 'react';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Modal from '../components/Modal.jsx';
import Button from '../components/Button.jsx';

function Projects({ content }) {
  const [openIndex, setOpenIndex] = useState(null);
  const openProject = typeof openIndex === 'number' ? content.projects[openIndex] : null;

  return (
    <Section id="projects" title="Projects">
      <div className="cards" role="list">
        {content.projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} onOpen={() => setOpenIndex(i)} />
        ))}
      </div>

      <Modal
        open={openProject != null}
        title={openProject?.title}
        onClose={() => setOpenIndex(null)}
      >
        {openProject && (
          <div id="project-modal" className="stack">
            <img
              src={openProject.image}
              srcSet={openProject.srcset}
              sizes="(max-width: 760px) 92vw, 720px"
              alt={`${openProject.title} large preview`}
              loading="lazy"
              style={{ width: "100%", borderRadius: 12 }}
            />
            <p className="muted">{openProject.details}</p>
            <div className="btn-row">
              <Button className="primary" as="a" href={openProject.links.demo} target="_blank" rel="noreferrer">Live Demo</Button>
              <Button as="a" href={openProject.links.code} target="_blank" rel="noreferrer">Source Code</Button>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}

export default Projects;
