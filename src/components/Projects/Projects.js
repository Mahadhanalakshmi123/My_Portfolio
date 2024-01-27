import React from "react";
import "./Project.css"; // Import the CSS file

import project1Image from "./project1.jpg";
import project2Image from "./project2.jpg";
import project3Image from "./project3.jpg";

const projects = [
  {
    title: "Job Application Form",
    description: (
      <strong>
        Job Application Form using Flask is a web application that enables users to fill out job application forms online. Creating a 'Job Application Form' that takes user input, and displays their Job application Form in a format as a result.
      </strong>
    ),
    link: "https://github.com/Mahadhanalakshmi123/Job-Application-Form-using-flask-js",
    image: project1Image,
  },
  {
    title: "Mail Customer Segmentation",
    description: (
      <strong>
        A 'Mail Customer Segmentation' is a 'Spam Mail Detection' that allows users to analyze email messages and classify them as either spam or not spam using SVM ALGORITHM. The project's fast email sorting has helped users work more efficiently with their emails.
      </strong>
    ),
    link: "https://github.com/Mahadhanalakshmi123/Mail-Customer-Segmentation-using-ML-SVM",
    image: project2Image,
  },
  {
    title: "School Management System",
    description: (
      <strong>
        Education under both the SSCS and CBSE  curriculums. Our schools provide a nurturing environment for students to excel academically and personally.Explore the possibilities with our School Management System
      </strong>
    ),
    link: "https://github.com/Mahadhanalakshmi123/IIIT-Intern-Task",
    image: project3Image,
  },
  // Add more project objects as needed
];

function Projects() {
  const scrollToHeader = () => {
    setTimeout(() => {
      document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    }, 0);
  };
  return (
    <section id="projects" className="projects-section">
      <h1>
        <strong style={{ fontSize: '48px' }}>My Projects</strong>
      </h1>
      {projects.map((project, index) => (
        <div className="project-box" key={index}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p style={{ fontSize: '17px' }}>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Know more.....
          </a>
        </div>
      ))}
      <button onClick={scrollToHeader} className="back-to-profile-button">
        Back to Profile
      </button>
    </section>
  );
}

export default Projects;
