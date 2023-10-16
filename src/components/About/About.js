import React from "react";
import "./index.css"; // Import the CSS file
export const about = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        If you have any questions or inquiries, feel free to contact me using
        the information below.
      </p>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: juhainamusthafa123@gmail.com</p>
          <p>Phone: (+971) 544931632</p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/juhaina-mufassir-580172175/">
              linkedin.com/in/juhaina
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/juhaina1996">github.com/juhaina</a>
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default about;
