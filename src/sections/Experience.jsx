import React from 'react';
import Section from '../components/Section.jsx';
import Tag from '../components/Tag.jsx';

function Experience({ content }) {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-content">
        <div className="experience-grid">
          <div className="experience-category">
            <h3>Work Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Software Engineer</h4>
                  <p className="company">ExampleCo</p>
                  <p className="period">2022 - Present</p>
                  <p className="description">
                    Led development of scalable web applications using React and Node.js. 
                    Improved application performance by 40% and reduced load times by 60%.
                  </p>
                  <div className="tech-stack">
                    <Tag>React</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>PostgreSQL</Tag>
                    <Tag>AWS</Tag>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Frontend Developer</h4>
                  <p className="company">StartupXYZ</p>
                  <p className="period">2021 - 2022</p>
                  <p className="description">
                    Built responsive user interfaces and implemented modern design patterns. 
                    Collaborated with design team to create intuitive user experiences.
                  </p>
                  <div className="tech-stack">
                    <Tag>Vue.js</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>Tailwind CSS</Tag>
                    <Tag>Figma</Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-category">
            <h3>Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Bachelor of Science in Computer Science</h4>
                  <p className="company">University of Technology</p>
                  <p className="period">2017 - 2021</p>
                  <p className="description">
                    Graduated with honors. Specialized in software engineering and web development. 
                    Completed capstone project on machine learning applications.
                  </p>
                  <div className="tech-stack">
                    <Tag>GPA: 3.8/4.0</Tag>
                    <Tag>Dean's List</Tag>
                    <Tag>CS Honor Society</Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-category">
            <h3>Certifications</h3>
            <div className="certifications">
              <div className="certification-item">
                <h4>AWS Certified Developer</h4>
                <p className="issuer">Amazon Web Services</p>
                <p className="period">2023</p>
              </div>
              <div className="certification-item">
                <h4>React Developer Certification</h4>
                <p className="issuer">Meta</p>
                <p className="period">2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
