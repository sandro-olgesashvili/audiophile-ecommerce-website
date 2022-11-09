import Logo from "../icons/logo.svg";
import fbIcon from "../icons/icon-facebook.svg";
import twIcon from "../icons/icon-twitter.svg";
import instaIcon from "../icons/icon-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="orange-line"></div>
        <div className="footer-nav">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <nav className="header-nav mb">
            <ul className="header-nav-ul">
              <li className="header-nav-li">
                <Link to="/">HOME</Link>
              </li>
              <li className="header-nav-li">
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li className="header-nav-li">
                <Link to="/speakers">SPEAKERS</Link>
              </li>
              <li className="header-nav-li">
                <Link to="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-info">
          <div className="footer-ino-text">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="mobile-desktop-p">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="footer-icons">
            <p className="mobile-footer-p">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="footer-icon">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fbIcon} alt="fb" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twIcon} alt="tw" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
