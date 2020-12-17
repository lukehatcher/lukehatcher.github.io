import React from 'react';

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="left-container">
        <img className="headshot" src="public/images/headshot.png" alt="headshot of Luke Hatcher" loading="lazy" />
        <div className="skills-container">
          <div className="skill-card">
            <p className="skill-card-title">Languages&nbsp;✅</p>
            <p id="skill">JavaScript</p>
            <p id="skill">TypeScript</p>
            <p id="skill">Python</p>
            <p id="skill">HTML & CSS</p>
          </div>
          <div className="skill-card">
            <p className="skill-card-title">Frontend&nbsp;📱</p>
            <p id="skill">React (hooks)</p>
            <p id="skill">jQuery</p>
            <p id="skill">Webpack, Babel</p>
          </div>
          <div className="skill-card">
            <p className="skill-card-title">Backend&nbsp;💾</p>
            <p id="skill">Node</p>
            <p id="skill">Express</p>
            <p id="skill">MongoDB, Mongoose</p>
            <p id="skill">MySQL</p>
            <p id="skill">PostgreSQL</p>
          </div>
          <div className="skill-card">
            <p className="skill-card-title">Other&nbsp;⚡️</p>
            <p id="skill">Jest & Enzyme</p>
            <p id="skill">Git, GitHub</p>
            <p id="skill">Docker, DockerHub</p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-card">
          <p className="blurb-title">A little about me</p>
          <p className="bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam vestibulum sagittis est ac placerat.
            Sed luctus neque non pharetra fringilla.
            Morbi viverra sagittis condimentum. Nulla leo odio,
            tempor et urna imperdiet, consectetur viverra felis.
            Curabitur ac mollis nunc. Sed luctus lacus eu lorem accumsan,
            ut iaculis sem hendrerit. Sed odio magna, ultrices nec odio tincidunt,
            faucibus fringilla ligula. Mauris non lorem aliquet, lacinia tellus quis,
            suscipit erat. Curabitur non tincidunt nibh, vitae facilisis massa.
            Etiam vestibulum sagittis est ac placerat.
            Sed luctus neque non pharetra fringilla.
            Morbi viverra sagittis condimentum. Nulla leo odio,
            tempor et urna imperdiet, consectetur viverra felis.
            Etiam vestibulum sagittis est ac placerat.
            Sed luctus neque non pharetra fringilla.
          </p>
        </div>
      </div>
    </div>
  );
}
