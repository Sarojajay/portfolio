import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="section-title mb-5 text-center">Work Experience</h2>

        {/* Experience Cards */}
        <div className="row experience-row">
          <div className="col-md-6 mb-4">
            <div className="experience-card shadow-sm">
              <h5 className="company-name">Ssoft Solution</h5>
              <span className="role">Junior Software Engineer</span>
              <span className="duration">Currently Working</span>
              <p className="experience-desc">
                Contributing to **blockchain-integrated web platforms** and real-time systems.  
                <strong>Key Contributions:</strong>
                <ul>
                  <li>Developed Daily/Monthly ROI modules with smart contract integration</li>
                  <li>Implemented real-time ROI dashboards for users</li>
                  <li>Optimized SQL procedures for user management and betting workflows</li>
                  <li>Collaborated with cross-functional teams to design full-stack solutions</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="experience-card shadow-sm">
              <h5 className="company-name">TechPuile</h5>
              <span className="role">Intern & Software Developer</span>
              <span className="duration">Jan 2024 - Aug 2024</span>
              <p className="experience-desc">
                Gained hands-on experience in full-stack development and blockchain integration.  
                <strong>Key Contributions:</strong>
                <ul>
                  <li>Assisted in building ROI modules and dashboards</li>
                  <li>Worked on smart contract integration for betting systems</li>
                  <li>Created optimized SQL queries for better performance</li>
                  <li>Learned real-time system design and collaboration in Agile environment</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
