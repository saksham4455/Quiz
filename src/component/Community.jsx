import React, { useEffect, useRef } from 'react';

function Community() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="community-background">
      <main className="community-container">
        <h1>🤝 Join Our Community</h1>
        <p>
          Connect with fellow quiz lovers, share your achievements, and challenge your friends!
        </p>

        <section className="community-features">
          <div className="feature-card" ref={el => cardsRef.current[0] = el}>
            <h2>🎉 Share Achievements</h2>
            <p>Show off your quiz scores and badges with the community.</p>
          </div>
          <div className="feature-card" ref={el => cardsRef.current[1] = el}>
            <h2>💬 Forums & Discussions</h2>
            <p>Ask questions, share tips, and discuss quiz topics with others.</p>
          </div>
          <div className="feature-card" ref={el => cardsRef.current[2] = el}>
            <h2>🏆 Challenges & Leaderboards</h2>
            <p>Participate in weekly challenges and climb the leaderboard.</p>
          </div>
          <div className="feature-card" ref={el => cardsRef.current[3] = el}>
            <h2>📢 Events & Announcements</h2>
            <p>Stay updated with upcoming quizzes, events, and community news.</p>
          </div>
        </section>

        <section className="community-cta">
          <h2>Get Started</h2>
          <p>
            Sign up or log in to join the conversation and start participating today!
          </p>
          <button className="join-button" onClick={() => alert('Feature coming soon!')}>
            Join Now
          </button>
        </section>
      </main>
    </div>
  );
}

export default Community;
