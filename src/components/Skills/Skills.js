// Skills.js
import React from "react";
import "./Skills.css";

const Skills = () => {
  const scrollToHeader = () => {
    setTimeout(() => {
      document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const skillsData = [
    { skill: "HTML", percentage: 95, icon: "🌐" },
    { skill: "CSS", percentage: 90, icon: "🎨" },
    { skill: "JavaScript", percentage: 85, icon: "🚀" },
    { skill: "Python", percentage: 90, icon: "🐍" },
    { skill: "React.js", percentage: 85, icon: "⚛️" },
    // Add more skills as needed
  ];

  return (
    <div className="skills-container" id="skills"> 
      <h1>Skills</h1>
      <div className="skills-list">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{item.icon}</div>
            <div className="skill-name">{item.skill}</div>
            <div className="skill-bar-container">
              <div className="skill-bar" style={{ width: `${item.percentage}%` }}>
                <div className="bar-label">{item.percentage}%</div>
              </div>
            </div>
            <div className="skill-percentage">{item.percentage}%</div>
          </div>
        ))}
      </div>
      <button onClick={scrollToHeader} className="back-to-profile-button">
        Back to Profile
      </button>
    </div>
  );
};

export default Skills;
