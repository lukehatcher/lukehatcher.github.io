import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-title">Software Applications</div>
      <div className="project-cards-containers">
        <div className="left-project">
          <div id="thought-bubble-text">
            <a href="https://github.com/lukehatcher/vscode-ios-todos" className="proj-titles">
              ThoughtBubble&nbsp;&nbsp;
              <FontAwesomeIcon className="fa" icon={faGithub} color="black" size="1x" />
            </a>
            <p>
              React Native application for keeping track of your projects.
              Syncs with your code editor (VSCode)
            </p>
          </div>
        </div>
        <div className="right-shorts-container">
          <div className="right-short-top">
            <div id="fec-text">
              <a href="https://github.com/Home2Go/carousel-service" className="proj-titles">
                light-slider&nbsp;&nbsp;
                <FontAwesomeIcon className="fa" icon={faGithub} color="black" size="1x" />
              </a>
              <p>
                Responsive and dynamic image viewer built with React
              </p>
            </div>
          </div>
          <div className="right-short-bottom">
            <div id="sdc-text">
              <a href="https://github.com/footwork-web/gallery-service" className="proj-titles">
                footwork back-end&nbsp;&nbsp;
                <FontAwesomeIcon className="fa" icon={faGithub} color="black" size="1x" />
              </a>
              <p>
                Service oriented back-end architecture for
                the open-source ecommerace-like application footwork
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-project">
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
  );
}
