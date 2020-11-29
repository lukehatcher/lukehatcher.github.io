import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import '../../public/styles/App.css';
import '../../public/styles/Header.css';
import '../../public/styles/AboutMe.css';

export default function App() {
  return (
    <div>
      <Header />
      <AboutMe />
    </div>
  );
}
