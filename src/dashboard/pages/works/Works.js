import React from 'react';
import styles from './Works.module.css';
import workPortfolio from '../../../assets/works/work1.png';

const worksData = [
  {
    id: 1,
    image: workPortfolio,
    jobTitle: 'Travel Landing, UX/UI',
    name: 'Chul Urina',
  },
  {
    id: 2,
    image: workPortfolio,
    jobTitle: 'Travel Landing, UX/UI',
    name: 'Chul Urina',
  },
  {
    id: 3,
    image: workPortfolio,
    jobTitle: 'Travel Landing, UX/UI',
    name: 'Chul Urina',
  },
];

const Works = () => {
  return (
    <>
      <div className={styles.containerHeader}>
        <h1>Resume</h1>
        <span className={styles.line}></span>
      </div>
      <div className={styles.cards}>
        {worksData.map((work) => (
          <div key={work.id} className={styles.card}>
            <img
              src={work.image}
              alt="portfolio"
              className={styles.workPortfolio}
            />
            <div className={styles.textContainer}>
              <p className={styles.jobTitle}>{work.jobTitle}</p>
              <h3 className={styles.name}>{work.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;