import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs
      .sendForm(
        "service_rloqhns",        // Service ID
        "template_lu9h2ei",          // Template ID (aap EmailJS dashboard se copy kare)
        form.current,
        "Dl4mbKN2pRlthhS4D"         // Public Key from EmailJS
      )
      .then(
        (result) => {
          setSuccessMsg("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          setSuccessMsg("Failed to send email. Try again later.");
        }
      );
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form mx-auto">
          <div className="form-group mb-3">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="form-control input-field"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="form-control input-field"
              required
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-control input-field textarea-field"
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit w-100">
            Send Message
          </button>
          {successMsg && <p className="text-center mt-3 success-msg">{successMsg}</p>}
        </form>
      </div>
    </section>
  );
}
