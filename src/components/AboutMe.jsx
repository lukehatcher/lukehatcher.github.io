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
        <img className="headshot" src="public/images/ibm-headshot.png" alt="headshot of Luke Hatcher" loading="lazy" />
      </div>
      <div className="right-container">
        <div className="right-card">
          <p className="blurb-title">A little about me</p>
          <p className="bio-text">
            My name is Luke, a software engineer based in Seattle, Washington. In 2020 I graduated from the University of Washington where I studied chemistry and math.
            I fell in love with programming while working in a computational chemistry research group at UW.
            I currently work as a IBM cloud engineer.
            I am passionate about building products that simplify peoples lives.
            In my free time I enjoy working on thoughtBubble, a productivity ecosystem for developers where they can sync their thoughts
            between their mobile devices and their code editors. Check it out below!
            I specialize in fullstack TypeScript/JavaScript with a love for all things React/React Native and I dabble with Python on occasion.
            Feel free to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}
