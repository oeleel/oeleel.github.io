import React from 'react';
import Tag from './Tag.jsx';

function ProjectCard({ project, onOpen }) {
  return (
    <article className="card" aria-labelledby={`${project.title}-h3`}>
      <button className="card-body" onClick={onOpen} aria-haspopup="dialog" aria-controls="project-modal">
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
    </article>
  );
}

export default ProjectCard;
