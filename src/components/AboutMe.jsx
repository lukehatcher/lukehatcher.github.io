import React, { useRef, useEffect, useState } from 'react';

export default function AboutMe() {
  const containerRef = useRef(null);
  const [mobileView, setMobileView] = useState(false);

  const handleResize = function () {
    if (window.innerWidth <= 960) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    handleResize(); // once to set everything
    window.addEventListener('resize', handleResize); // set listner for future resizing
  }, []);

  return (
    <div className="aboutme-container" ref={containerRef} style={{ flexDirection: mobileView ? 'column' : 'row' }}>
      <div className="left-container">
        <img className="headshot" src="public/images/headshot.png" alt="headshot of Luke Hatcher" loading="lazy" />
      </div>
      <div className="right-container">
        <div className="right-card">
          <p className="blurb-title">A little about me</p>
          <p className="bio-text">
            Welcome to my website! My name is Luke and I am a recent graduate from the University of Washington.
            In college I studied chemistry and math and picked up programming through my studies.
            I am passionate about building products that simplify peoples lives. I am especially interested
            in building tools to help make programmers lives easier as well as building tools that help people learn things better.
            I currently specialize in fullstack JavaScript with a love for React/React Native.
            Feel free to check out some of my projects below and get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}
