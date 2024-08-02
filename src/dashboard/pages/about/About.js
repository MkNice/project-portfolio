import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h2>About</h2>
          <span className={styles.line}></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat
          aliquam ut debitis sapiente. Minima, est dignissimos doloribus
          perspiciatis reiciendis ipsum ab dolorum architecto temporibus
          laborum, doloremque commodi ut ex?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
          perspiciatis amet beatae modi quis aliquid, adipisci, cumque maxime
          sit totam placeat recusandae! Quis quae doloribus ipsam fugit
          voluptates minima. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsam blanditiis veniam, mollitia repellendus rerum optio at
          animi suscipit doloremque vel vitae corrupti enim molestias ducimus
          aut eos modi, magni aspernatur?
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h2>What I Do</h2>
          <span className={styles.line}></span>
        </div>
        <div className={styles.services}>
          <div className={styles.service}>
            <h3>Ответственность</h3>
            <p>
              Способность выполнять общение и обязательства дисциплины и
              надёжность.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Photo</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div className={styles.service}>
            <h3>App development</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div className={styles.service}>
            <h3>Web development</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
