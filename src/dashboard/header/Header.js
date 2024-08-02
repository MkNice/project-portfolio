import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import profileIcon from '../../assets/navigation/profile.svg';
import resumeIcon from '../../assets/navigation/resume.svg';
import portfolioIcon from '../../assets/navigation/portfolio.svg';
import contacttIcon from '../../assets/navigation/contacts.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigationContainer}>
        <ul className={styles.navElements}>
          <li className={styles.navElement}>
            <Link to="/about">
              <div className={styles.containerImg}>
                <img src={profileIcon} alt="icon-about" />
              </div>
              <span>About</span>
            </Link>
          </li>
          <li className={styles.navElement}>
            <Link to="/resume">
              <div className={styles.containerImg}>
                <img src={resumeIcon} alt="icon-resume" />
              </div>
              <span>Resume</span>
            </Link>
          </li>
          <li className={styles.navElement}>
            <Link to="/works">
              <div className={styles.containerImg}>
                <img src={portfolioIcon} alt="icon-works"/>
              </div>
              <span>Works</span>
            </Link>
          </li>
          <li className={styles.navElement}>
            <Link to="/contact">
              <div className={styles.containerImg}>
                <img src={contacttIcon} alt="icon-contact" />
              </div>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;