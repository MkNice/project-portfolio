import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../pages/about/About';
// import Works from '../pages/works/Works';
// import Resume from '../pages/resume/Resume';
import Contact from '../pages/contact/Contact';
import styles from './Content.module.css';

const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.contentDescription}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />*/}
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </section>
  );
};

export default Content;
