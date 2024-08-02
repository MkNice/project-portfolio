import React from 'react';
import About from '../pages/about/About';
import styles from './Content.module.css';

const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.contentDescription}>
        <About />
      </div>
    </section>
  );
};

export default Content;
