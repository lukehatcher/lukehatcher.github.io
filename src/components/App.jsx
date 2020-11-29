import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import '../../public/styles/App.css';
import '../../public/styles/Header.css';
import '../../public/styles/AboutMe.css';
import '../../public/styles/Projects.css';
import '../../public/styles/Footer.css';

export default function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
