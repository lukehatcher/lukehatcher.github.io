import React from 'react';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-title">Projects</div>
      <div className="project-cards-containers">
        <div className="left-project">
          <a href="https://github.com/lukehatcher/vscode-ios-todos">ThoughtBubble</a>
          <div id="thought-bubble-text">
            <p>
              React Native application for keeping track of your projects.
              Syncs with your code editor (VSCode)
            </p>
          </div>
        </div>
        <div className="right-shorts-container">
          <div className="right-short-top">
            <a href="https://github.com/Home2Go/carousel-service">light-slider</a>
            <div id="fec-text">
              <p>
                Responsive and dynamic image viewer
              </p>
            </div>
          </div>
          <div className="right-short-bottom">
            <a href="https://github.com/footwork-web/gallery-service">footwork back-end</a>
            <div id="sdc-text">
              <p>
                Service oriented back-end architecture for
                open source ecommerace-like application footwork
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-project">
        <a href="https://github.com/lukehatcher/algo-sorter">algo-sorter</a>
        <div id="algo-sorter-text">
          <p>
            NPM package for sorting arrays with your choice of algorithm. Comes with TypeScript support.
          </p>
        </div>
      </div>
    </div>
  );
}
