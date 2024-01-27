// About.js
import React from "react";
import "./About.css";
import about from './about.jpg';

function About() {
  const scrollToHeader = () => {
    setTimeout(() => {
      document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-photo">
          <img src={about} alt="about" />
        </div>
        <div className="about-text">
          <h1><strong style={{ fontSize: '58px' }}>About Me</strong></h1>
          <p><strong style={{ fontSize: '24px' }}>
            I am Maha DhanaLakshmi Balam and I'm currently pursuing my B.Tech in the 3rd year with a specialization in Artificial Intelligence and Data Science.
            I have a strong passion for technology and data-driven solutions, and I'm enthusiastic about exploring the world of AI and its applications.
            In addition to my academic pursuits, I enjoy working on personal projects, staying updated with the latest trends in AI, and continuously expanding my knowledge in this field.
            Feel free to connect with me if you share a similar interest or if you'd like to collaborate on AI-related projects!
          </strong></p>
          <p><strong style={{ fontSize: '18px' }}>
            Here are some additional details about me:
            - Hobbies: I love coding, reading, and exploring new technologies.
            - Favorite Programming Languages: Python and JavaScript.
            - Achievements: I have participated in several AI hackathons and won awards.
            - Future Goals: I aspire to contribute to cutting-edge AI research and develop innovative solutions.
          </strong></p>
        </div>
      </div>
      <button onClick={scrollToHeader} className="back-to-profile-button">
        Back to Profile
      </button>
    </section>
  );
}

export default About;
