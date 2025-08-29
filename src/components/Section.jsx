import React from 'react';

function Section({ id, title, children }) {
  // Each section owns its own reveal animation container
  return (
    <section id={id} className="page">
      <div className="container reveal" data-section>
        {title ? (
          <h2 className="center" style={{ fontSize: "var(--fs-h2)", margin: "0 0 1rem" }}>
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export default Section;
