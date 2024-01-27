import React from "react";
import "./Header.css";
import profilePhoto from "./Maha.jpg";
import LinkedInLogo from './linkdin.jpeg';
import GitHubLogo from './github.jpeg';
import youtubeubLogo from './youtube.jpeg';

function Header() {
  const linkedInUrl = 'https://www.linkedin.com/in/balam-maha-dhanalakshmi-18519a229/';
  const githubUrl = 'https://github.com/Mahadhanalakshmi123';
  const youtubeUrl = 'https://youtube.com/@maha_balam?si=iDspi1lRzarvxAMd';

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header" id="header">
      <div className="header-content">
        <div className="header-info">
          <div className="header-text">
            <h2 className="header-title">Hello, I'm MAHA</h2>
            <h2 className="header-title">Web Developer</h2>
            <p className="header-description">
              <strong style={{ fontSize: '24px' }}>
                I'm a passionate web developer with expertise in front-end technologies such as HTML, CSS, and JavaScript. I have a strong foundation in building responsive and user-friendly websites that deliver exceptional user experiences.
              </strong>
            </p>
          </div>
          <img
            src={profilePhoto}
            alt="Your Name"
            className="header-profile-photo"
          />
          <div className="header-buttons">
  <button
    className="header-link"
    onClick={() => scrollToSection("about")}
  >
    About
  </button>
  <button
    className="header-link"
    onClick={() => scrollToSection("projects")}
  >
    Projects
  </button>
  <button
    className="header-link"
    onClick={() => scrollToSection("skills")}
  >
    Skills
  </button>
  <button
    className="header-link"
    onClick={() => scrollToSection("contact")}
  >
    Contact me
  </button>
</div>

        </div>
      </div>
      <footer className="footer-content">
        <p><strong style={{ fontSize: '24px' }}>Find me on.....</strong></p>

        <div className="social-link">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" />
          </a>
        </div>

        <div className="social-link">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={GitHubLogo} alt="GitHub" />
          </a>
        </div>

        <div className="social-link">
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <img src={youtubeubLogo} alt="YouTube" />
          </a>
        </div>
      </footer>
    </header>
  );
}

export default Header;
