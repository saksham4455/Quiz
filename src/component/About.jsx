function About() {
  return (
    <div className="about-background">
      <main className="about-bento-container">
        <h1 className="about-title">About This Quiz Website</h1>
        <div className="bento-grid">
          <section className="bento-card mission">
            <h2>🎯 Our Mission</h2>
            <ul>
              <li>Make learning enjoyable and interactive for everyone.</li>
              <li>Encourage curiosity through fun knowledge challenges.</li>
              <li>Promote continuous self-improvement and discovery.</li>
            </ul>
          </section>

          <section className="bento-card features">
            <h2>✨ Features</h2>
            <ul>
              <li>Instant feedback on every question.</li>
              <li>Beautiful, distraction-free interface.</li>
              <li>Progress tracking and score history.</li>
              <li>Wide variety of quiz topics for all interests.</li>
            </ul>
          </section>

          <section className="bento-card creator">
            <h2>👩‍💻 About the Creator</h2>
            <ul>
              <li>Web developer passionate about education and technology.</li>
              <li>Believes in the power of gamified learning.</li>
              <li>Always open to feedback and collaboration.</li>
            </ul>
          </section>

          <section className="bento-card tech">
            <h2>🛠️ Technologies Used</h2>
            <ul>
              <li>React & React Router for seamless user experience.</li>
              <li>Modern CSS for responsive, bento-style design.</li>
              <li>Open-source assets and APIs for dynamic content.</li>
              <li>Continuous improvements based on user feedback.</li>
            </ul>
          </section>

          <section className="bento-card contact-cta">
            <h2>💬 Get in Touch</h2>
            <ul>
              <li>Questions or suggestions? We’d love to hear from you!</li>
              <li>
                Visit our <a href="/contact" className="contact-link">Contact Page</a>
              </li>
              <li>Connect with us on social media for updates and tips.</li>
            </ul>
          </section>

          <section className="bento-card community">
            <h2>🤝 Community & Support</h2>
            <ul>
              <li>Join our community of quiz lovers and learners.</li>
              <li>Share your achievements and challenge friends.</li>
              <li>Access support anytime through forums and help channels.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;
