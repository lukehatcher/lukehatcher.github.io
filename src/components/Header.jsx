import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faFileAlt, faBars, faTimes,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  // const mobileView = window.innerWidth <= 960;
  const [mobile, setMobile] = useState(window.innerWidth <= 960);
  const [bars, setBars] = useState(true);
  const nameTextRef = useRef('');
  const titleTextRef = useRef('');
  const modalRef = useRef(null);
  const nameText = "Hi, I'm Luke Hatcher";
  const titleText = '- aspiring software engineer -';

  const debounce = (fxn, time) => {
    let timer;
    return (event) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(fxn, time, event);
    };
  };

  useEffect(() => {
    let count = 0;
    let go = 0;
    const topText = () => {
      const interval1 = setInterval(() => {
        autoWriteText(nameText, nameText.length, nameTextRef, interval1);
      }, 35);
    };

    const bottomText = () => {
      const interval2 = setInterval(() => {
        autoWriteText(titleText, titleText.length, titleTextRef, interval2);
      }, 35);
    };
    const autoWriteText = (txt, strLen, domRef, int) => {
      domRef.current.innerText = txt.slice(0, count);
      count++;
      if (count > strLen) {
        count = 0;
        clearInterval(int);
        go++;
        if (go === 1) {
          bottomText();
        }
      }
    };
    topText();
    // resizing things
    const handleResize = debounce(() => {
      if (window.innerWidth <= 960) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      // clears event listener on render
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBarsClick = () => {
    if (modalRef.current.style.bottom === '10vh') {
      modalRef.current.style.bottom = '0vh';
      return;
    }
    modalRef.current.style.bottom = '10vh';
  };

  return (
    <>
      <div className="img-container">
        <img src="public/images/code11.png" alt="space view of earth" className="code-image" />
        <div className="intro-text-container">
          <p className="hi-name-text" ref={nameTextRef} />
          <p className="swe-text" ref={titleTextRef} />
        </div>
      </div>
      <div className="header-container">
        {!mobile
          ? (
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
          )
          : (
            <>
              <nav
                className="bars-container"
                onClick={() => {
                  handleBarsClick();
                }}
              >
                {bars
                  ? (
                    <FontAwesomeIcon
                      className="fa bars"
                      icon={faBars}
                      onClick={() => {
                        setBars(!bars);
                      }}
                      color="white"
                      size="2x"
                    />
                  )
                  : (
                    <FontAwesomeIcon
                      className="fa times"
                      icon={faTimes}
                      onClick={() => {
                        setBars(!bars);
                      }}
                      color="white"
                      size=".2x"
                    />
                  )}
              </nav>
              <div className="modal-container">
                <div className="modal" ref={modalRef} style={{ bottom: '10vh' }}>
                  <div className="modal-link-container">
                    <a className="modal-link" href="https://github.com/lukehatcher" title="GitHub profile">
                      GitHub
                    </a>
                    <a className="modal-link" href="https://www.linkedin.com/in/luke-hatcher-414173152/" title="LinkdIn profile">
                      LinkedIn
                    </a>
                    <a className="modal-link" href="mailto:lukehatcher98@gmail.com" title="email">
                      Email
                    </a>
                    <a className="modal-link" href="lukehatcher.me" title="resume">
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    </>
  );
}
