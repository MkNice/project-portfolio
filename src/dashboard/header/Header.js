import React from 'react';
import styles from './Header.module.css';
import profileIcon from '../../assets/navigation/profile.svg';
import resumeIcon from '../../assets/navigation/resume.svg';
import portfolioIcon from '../../assets/navigation/portfolio.svg';
import contantIcon from '../../assets/navigation/contacts.svg'


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigationContainer}>
        <ul className={styles.navElements}>
          <li className={styles.navElement}>
            <a href="href">
              <div className={styles.containerImg}>
                <img src={profileIcon} alt="icon-about" />
              </div>
              <span> about</span>
            </a>
          </li>
          <li className={styles.navElement}>
            <a href="href">
              <div className={styles.containerImg}>
                <img src={resumeIcon} alt="icon-resume" />
              </div>
              <span> resume</span>
            </a>
          </li>
          <li className={styles.navElement}>
            <a href="href">
              <div className={styles.containerImg}>
                <img src={portfolioIcon} alt="icon-works"/>
              </div>
              <span> works</span>
            </a>
          </li>
          <li className={styles.navElement}>
            <a href="href">
              <div className={styles.containerImg}>
                <img src={contantIcon} alt="icon-contact" />
              </div>
              <span> contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
