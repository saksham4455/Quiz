import React, { useState } from 'react';
import contact_video from './assets/contact_video.mp4';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <main className="contact-container">
      <video
        className="contact-bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={contact_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Fill out the form below or email us directly.</p>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {status && <p className="form-status">{status}</p>}

        <section className="contact-info">
          <h2>Other Ways to Reach Us</h2>
          <p>Email: <a href="mailto:support@quizapp.com">support@quizapp.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+91 98472XXXXX</a></p>
          <p>Follow us on social media for updates and tips!</p>
        </section>
      </div>
    </main>
  );
}

export default Contact;
