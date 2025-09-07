import React from 'react';
import Tag from './Tag.jsx';
import Button from './Button.jsx';

function ProjectCard({ project, isExpanded, onToggle }) {
  return (
    <article className={`card ${isExpanded ? 'card-expanded-state' : ''}`} aria-labelledby={`${project.title}-h3`}>
      <button className="card-body" onClick={onToggle}>
        <img
          src={project.image}
          srcSet={project.srcset}
          sizes="(max-width: 600px) 92vw, 400px"
          alt={`${project.title} thumbnail`}
          loading="lazy"
        />
        <div className="pad">
          <h3 id={`${project.title}-h3`}>{project.title}</h3>
          <p className="muted" style={{ margin: 0 }}>{project.summary}</p>
          <div className="tag-row">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </button>
      
      <div className={`card-expanded ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="expanded-content">
          <div className="expanded-details">
            {project.details.includes('•') ? (
              <ul className="project-details-list">
                {project.details.split('\n').map((item, index) => {
                  const cleanItem = item.replace(/^•\s*/, '').trim();
                  return cleanItem ? <li key={index}>{cleanItem}</li> : null;
                })}
              </ul>
            ) : (
              <p className="muted">{project.details}</p>
            )}
            <div className="btn-row">
              <Button className="primary" as="a" href={project.links.demo} target="_blank" rel="noreferrer">Live Demo</Button>
              <Button as="a" href={project.links.code} target="_blank" rel="noreferrer">Source Code</Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
