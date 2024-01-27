import React from "react";
import "./Contact.css";

function Contact() {
  const scrollToHeader = () => {
    setTimeout(() => {
      document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <section id="contact" className="contact-section">
      <h1><strong style={{ fontSize: '48px' }}>Let Us Contact</strong></h1>
      <p><strong style={{ fontSize: '20px' }}>
        Feel free to reach out to me if you have any questions, inquiries, or if you'd like to collaborate on a project. You can contact me through the following methods:
        </strong>
      </p>
      <div className="contact-content">
        <div className="contact-details">
          <div className="large-font">
            <p><strong>First Name:</strong> Maha DhanaLakshmi</p>
            <p><strong>Last Name:</strong> Balam</p>
            <p><strong>Email:</strong> balammaha4@gmail.com</p>
            <p><strong>Phone Number:</strong> +91 6301403323</p>
          </div>
        </div>
      </div>
      <div className="contact-secondary">
        <ul>
          <li>
            Social Media:
            <ul>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/balam-maha-dhanalakshmi-18519a229/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in touch with LinkedIn Profile
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/Mahadhanalakshmi123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit GitHub Profile
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </li>
        </ul>
      </div>
      <button onClick={scrollToHeader} className="back-to-profile-button">
        Back to Profile
      </button>
    </section>
  );
}

export default Contact;
