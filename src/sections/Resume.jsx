import React from 'react';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';

function Resume({ content }) {
  return (
    <Section id="resume" title="Resume">
      <div className="resume-container">
        <div className="resume-actions">
          <Button as="a" className="primary" href="/documents/resume_site.pdf" download="Leo_L_Resume.pdf">
            📄 Download PDF
          </Button>
          <Button as="a" className="secondary" href="/documents/resume_site.pdf" target="_blank" rel="noopener noreferrer">
            🔗 Open in New Tab
          </Button>
        </div>
        <div className="pdf-viewer">
          <iframe
            src="/documents/resume_site.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&menubar=0&zoom=150&view=FitH"
            title="Resume PDF"
            className="pdf-iframe"
          />
        </div>
      </div>
    </Section>
  );
}

export default Resume;
