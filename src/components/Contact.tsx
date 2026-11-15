import { useState, FormEvent } from "react";
import { MdArrowOutward, MdCopyright, MdCheckCircle, MdSend } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import PORTFOLIO_DATA from "../data/portfolioData";
import "./styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email is required";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 15) errs.message = "Message must be at least 15 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate instantaneous delivery
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <h2>
          Let&apos;s Build Something <span>Remarkable</span>
        </h2>
        <p className="contact-lead">
          Open to full-time engineering roles, AI/ML research collaborations, and full-stack architecture initiatives.
        </p>

        <div className="contact-main-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-info-panel">
            {/* Availability Pill */}
            <div className="contact-avail-card">
              <span className="avail-pulse" />
              <div>
                <strong>Available for Opportunities</strong>
                <p>Currently open to technical roles in AI/ML & Full-Stack Development.</p>
              </div>
            </div>

            <div className="contact-details-box">
              <div className="contact-meta-row">
                <span className="contact-meta-label">Email</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  data-cursor="disable"
                  className="contact-meta-val"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>

              <div className="contact-meta-row">
                <span className="contact-meta-label">Phone</span>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/[\s-]/g, "")}`}
                  data-cursor="disable"
                  className="contact-meta-val"
                >
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>

              <div className="contact-meta-row">
                <span className="contact-meta-label">Location</span>
                <span className="contact-meta-text">
                  <FaMapMarkerAlt /> {PORTFOLIO_DATA.personal.location}
                </span>
              </div>

              <div className="contact-meta-row">
                <span className="contact-meta-label">Timezone</span>
                <span className="contact-meta-text">
                  <FaClock /> IST (UTC+5:30)
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="contact-socials-group">
              <h4>Digital Profiles</h4>
              <div className="contact-socials-grid">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social-pill"
                >
                  GitHub <MdArrowOutward />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social-pill"
                >
                  LinkedIn <MdArrowOutward />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social-pill"
                >
                  LeetCode <MdArrowOutward />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social-pill"
                >
                  CodeChef <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success-state">
                <MdCheckCircle className="contact-success-icon" />
                <h4>Message Received!</h4>
                <p>
                  Thank you for reaching out, I will respond to your email at{" "}
                  <strong>{form.email}</strong> promptly.
                </p>
                <button
                  className="contact-reset-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  data-cursor="disable"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <h4>Send a Direct Message</h4>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && <span className="err-msg">{errors.name}</span>}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="alex@domain.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && <span className="err-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry, Role Opportunity, or Collaboration"
                    value={form.subject}
                    onChange={(e) => {
                      setForm({ ...form, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={errors.subject ? "error" : ""}
                  />
                  {errors.subject && <span className="err-msg">{errors.subject}</span>}
                </div>

                <div className="contact-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={errors.message ? "error" : ""}
                  />
                  {errors.message && <span className="err-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="contact-submit-btn"
                  data-cursor="disable"
                >
                  {loading ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <MdSend /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer info & Copyright */}
        <div className="contact-footer">
          <div>
            <h3>
              Architected & Developed by <span>{PORTFOLIO_DATA.personal.name}</span>
            </h3>
            <p>Built with React, TypeScript, Three.js, GSAP & WebGL.</p>
          </div>
          <h5>
            <MdCopyright /> 2026 {PORTFOLIO_DATA.personal.fullName}. All rights reserved.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
