import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCommentDots } from "react-icons/fa";
import "../index.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load Tawk.to script
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/67b9d56df1eab6190d0c2e3d/1ikmujdgi";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();

    window.Tawk_API = Tawk_API;
  }, []);

  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    } else {
      alert("Live chat is not ready yet. Please try again in a few seconds.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: "Miss Swetha CEO - Amica",
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_va7puqb",
        "template_5dd5f6c",
        templateParams,
        "rEZoIexxLDgSlPtB9"
      );

      alert("Your message has been sent!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">Chat to our friendly team</p>
      <p className="contact-info">
        We’d love to hear from you! Fill out the form or send us an email.
      </p>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-detail">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>Our friendly team is here to help.</p>
          <p className="email-address">amicaeventhub1@gmail.com</p>
        </div>

        <div className="contact-detail">
          <FaCommentDots className="icon" />
          <h3>Live Chat</h3>
          <p>Our friendly team is here to help.</p>
          <p className="chat-link" onClick={openChat} style={{ cursor: "pointer", fontWeight: "bold", color: "#007bff" }}>
            Start new chat
          </p>
        </div>

        <div className="contact-detail">
          <FaMapMarkerAlt className="icon" />
          <h3>Office</h3>
          <p>No.4, Yamuna Street, Velachery AU</p>
        </div>

        <div className="contact-detail">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>Mon-Fri, 8am - 5pm</p>
          <p className="phone-number">+91 9003851079</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
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
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
