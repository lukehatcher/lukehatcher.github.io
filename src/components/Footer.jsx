import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const handleScrollUpClick = () => {
    console.log('hi');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="footer-container">
      <div className="copyright-container">
        <span className="copyright">Luke Hatcher &copy; 2020</span>
      </div>
      <div
        className="arrow-container"
        role="button"
        onClick={() => {
          handleScrollUpClick();
        }}
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} color="black" size="2x" />
      </div>
    </div>
  );
}
