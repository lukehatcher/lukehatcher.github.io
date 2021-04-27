import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project-cards-containers">
        <div className="left-project">
          <img id="left-project-img" src="public/images/iphone.jpg" alt="iphone-background" loading="lazy" />
          <div id="thought-bubble-text">
            <a href="https://github.com/lukehatcher/thoughtbubble-monorepo" className="proj-titles">
              thoughtBubble&nbsp;&nbsp;
              <FontAwesomeIcon className="fa" icon={faGithub} color="black" size="1x" />
            </a>
            <p>
              Productivity ecosystem for developers.
              Sync your thoughts between your mobile device and your VSCode editor.
            </p>
          </div>
        </div>
        <div className="right-shorts-container">
          <div className="right-short-top">
            <img id="right-project-img" src="public/images/keyboard.jpg" alt="keyboard-background" loading="lazy" />
            <div id="algo-sorter-text">
              <a href="https://github.com/lukehatcher/algo-sorter" className="proj-titles">
                algo-sorter&nbsp;&nbsp;
                <FontAwesomeIcon className="fa" icon={faGithub} color="black" size="1x" />
              </a>
              <p>
                NPM package for sorting different array types with your choice of algorithm.
                Comes with TypeScript support.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
