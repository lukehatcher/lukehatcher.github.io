import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <div className="img-container">
        <img src="public/images/code11.png" alt="space view of earth" className="code-image" />
        <div className="intro-text-container">
          <p className="hi-name-text">Hi, I&apos;m Luke Hatcher</p>
          <p className="swe-text"> - aspiring software engineer - </p>
        </div>
      </div>
      <div className="header-container">
        <span className="header-name-container">
          lukehatcher.io
        </span>
        <nav className="nav-container">
          <a className="links" href="https://github.com/lukehatcher" title="GitHub profile">
            <FontAwesomeIcon className="fa" icon={faGithub} color="white" size="2x" />
          </a>
          <a className="links" href="https://www.linkedin.com/in/luke-hatcher-414173152/" title="LinkdIn profile">
            <FontAwesomeIcon className="fa" icon={faLinkedin} color="white" size="2x" />
          </a>
          <a className="links" href="mailto:lukehatcher98@gmail.com" title="email">
            <FontAwesomeIcon className="fa" icon={faEnvelope} color="white" size="2x" />
          </a>
          <a className="links" href="lukehatcher.me" title="resume">
            <FontAwesomeIcon className="fa" icon={faFileAlt} color="white" size="2x" />
          </a>
        </nav>
      </div>
    </>
  );
}
