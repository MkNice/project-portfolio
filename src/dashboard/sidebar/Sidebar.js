import React from 'react';
import styles from './Sidebar.module.css';
import profileAvatar from '../../assets/ava.jpg';
import linkedinIcon from '../../assets/social_media/linkedin.svg';
import github from '../../assets/social_media/github.svg'
import phoneIcon from '../../assets/personal_info/smartphone.svg';
import emailIcon from '../../assets/personal_info/email.svg';
import locationIcon from '../../assets/personal_info/location.svg';
import calendarIcon from '../../assets/personal_info/calendar.svg';
import cv from '../../assets/CV/cv.pdf';

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.profile}>
        <img
          className={styles.profileAvatar}
          src={profileAvatar}
          alt="Profile"
        />
        <h2>monalisa ashley</h2>
        <p>
          <span className={styles.upperCase}>ui/ux</span> designer
        </p>
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaItem}>
            <a href="href">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
          <div className={styles.socialMediaItem}>
            <a href="href">
              <img src={github} alt="GIT" />
            </a>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <div className={styles.iconContainer}>
              <img src={phoneIcon} alt="phone-icon" />
            </div>
            <div className={styles.contactItemContent}>
              <span>phone</span>
              <span>+123 456 7890</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.iconContainer}>
              <img src={emailIcon} alt="email-icon" />
            </div>
            <div className={styles.contactItemContent}>
              <span>email</span>
              <span>Anastasia.mihailova123@gmail.com</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.iconContainer}>
              <img src={locationIcon} alt="location-icon" />
            </div>
            <div className={styles.contactItemContent}>
              <span>location</span>
              <span>Hong Kong, China</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.iconContainer}>
              <img src={calendarIcon} alt="calendar-icon" />
            </div>
            <div className={styles.contactItemContent}>
              <span>birthday</span>
              <span>may 27, 1990</span>
            </div>
          </div>
        </div>
        <a href={cv} download>
          <button className={styles.btn}>Download CV</button>
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
