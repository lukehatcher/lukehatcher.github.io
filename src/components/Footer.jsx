import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="footer-container">
      <span className="copyright">Luke Hatcher &copy; 2020</span>
      <div className="return to top">
        <FontAwesomeIcon icon={faAngleDoubleUp} color="black" size="2x" />
      </div>
    </div>
  );
}
