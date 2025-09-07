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
                  <h4>Undergraduate Researcher</h4>
                  <p className="company">University of Virginia</p>
                  <p className="period">Aug. 2025 - Present</p>
                  <p className="description">
                    Working with Dr. Yanjun Qi (Principal Applied Scientist @ AWS) and PhD student Kefan Song on creating robust and safe LLMs and agentic AI. Researching frameworks for agentic AI systems that can perceive consequences and apply ethical reasoning, thereby moving beyond static rule-based restrictions toward dynamic, value-sensitive decision-making.
                  </p>
                  <div className="tech-stack">
                    <Tag>Python</Tag>
                    <Tag>Machine Learning</Tag>
                    <Tag>LLMs</Tag>
                    <Tag>AI Research</Tag>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Computer Science Teaching Assistant</h4>
                  <p className="company">University of Virginia</p>
                  <p className="period">Aug. 2025 - Present</p>
                  <p className="description">
                    Assist with monitoring assignments, hold office hours, and provide support for 200+ computer science students. Help students understand programming concepts, debug code, and develop problem-solving skills in computer science coursework.
                  </p>
                  <div className="tech-stack">
                    <Tag>Python</Tag>
                  </div>
                </div>
              </div>
 
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Software Engineer Intern</h4>
                  <p className="company">Northrop Grumman</p>
                  <p className="period">May 2025 - August 2025</p>
                  <p className="description">
                    Contributed to simulation software for Arbitrary Waveform Generator testing, refactored configuration systems, and improved electronic intelligence workflows. Designed and implemented data pipelines and web tools, collaborating with engineers to streamline cross-platform builds and accelerate program deployment. 
                  </p>
                  <div className="tech-stack">
                    <Tag>C++</Tag>
                    <Tag>Python</Tag>
                    <Tag>YAML</Tag>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Full-Stack Developer Intern</h4>
                  <p className="company">UVA Alumni Internship Experience Program</p>
                  <p className="period">May 2024 - Aug. 2024</p>
                  <p className="description">
                    Collaborated in a team to build an e-commerce app for college students, using React, HTML, JavaScript, and CSS for frontend, with Express.js and Postgres/Supabase for backend. Adopted Agile methodologies, participating in sprint planning, daily stand-ups, and retrospectives. Developed clothing sort functionality to enhance user experience and simplify shopping process. Connected Postgres database to application to store user information and details of products being sold.
                  </p>
                  <div className="tech-stack">
                    <Tag>React</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>HTML</Tag>
                    <Tag>CSS</Tag>
                    <Tag>Express.js</Tag>
                    <Tag>PostgreSQL</Tag>
                    <Tag>Supabase</Tag>
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
                  <h4>Undergraduate Student</h4>
                  <p className="company">University of Virginia</p>
                  <p className="period">Aug. 2023 - May 2027</p>
                  <p className="description">
                    Student pursuing a B.S. in Computer Science and a B.A. in Applied Statistics. Engaged in machine learning, AI, and data-driven research 
                  </p>
                  <div className="tech-stack">
                    <Tag>GPA: 3.98/4.0</Tag>
                    <Tag>Dean's List</Tag>
                    <Tag>Korean Student Association</Tag> 
                    <Tag>Machine Learning Club</Tag> 
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-category technical-skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skill-tags">
                {content.skills.Languages.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Frameworks/Technologies</h4>
              <div className="skill-tags">
                {content.skills["Frameworks/Technologies"].map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Libraries</h4>
              <div className="skill-tags">
                {content.skills.Libraries.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
