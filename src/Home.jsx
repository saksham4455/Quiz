import React from 'react';
import { useNavigate } from 'react-router-dom';
import homevideo from './assets/home_video.mp4';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={homevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1>Welcome to the Quiz!</h1>
        <button 
          onClick={() => navigate('/quiz')} // <-- This makes the button work!
          className='start-button'
        >
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default Home;
