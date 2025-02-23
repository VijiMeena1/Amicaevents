import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs
import "../index.css"; // Import index.css from the src directory

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure emailjs parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: "Miss Swetha CEO - Amica",
      from_email: formData.email,
      message: formData.message,
    };

    // Send email using emailjs
    emailjs.send("service_va7puqb", "template_5dd5f6c", templateParams, "rEZoIexxLDgSlPtB9")
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }); // Reset the form
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        alert("There was an error sending your message. Please try again later.");
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Chat to our friendly team</p>
      <p className="contact-info">We’d love to hear from you. Please fill out this form or shoot us an email.</p>

      <div className="contact-details">
        {/* Your contact details here */}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default ContactUs;
