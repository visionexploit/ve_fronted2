import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from './pages/videos/WelcomeToVE.mp4';

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="hero-container">
      <h1>DREAM BIG</h1>
      <p>Experience the beauty of studying abroad with VisionExploit.<br/> 
        From peaceful parks in Turkey to vibrant cities across the globe, we're here to help you explore, learn, and grow in world-class academic environments.
        📚✈ Ready to take the next step? Let us guide you through the process.</p>
      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/sign-up'
        >
            REGISTER NOW
        </Button>
        <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleWatchClick}
        >
            WATCH <i className='far fa-play-circle' />
        </Button>
      </div>
      {showVideo && (
        <div className="video-modal">
          <div className="video-container">
            <button className="close-video" onClick={() => setShowVideo(false)}>×</button>
            <video 
              src={video} 
              controls 
              autoPlay 
              className="hero-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
