import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentHeader}>
        <h2>
          About <span className={styles.line}></span>
        </h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat
        aliquam ut debitis sapiente. Minima, est dignissimos doloribus
        perspiciatis reiciendis ipsum ab dolorum architecto temporibus laborum,
        doloremque commodi ut ex?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
        perspiciatis amet beatae modi quis aliquid, adipisci, cumque maxime sit
        totam placeat recusandae! Quis quae doloribus ipsam fugit voluptates
        minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        blanditiis veniam, mollitia repellendus rerum optio at animi suscipit
        doloremque vel vitae corrupti enim molestias ducimus aut eos modi, magni
        aspernatur?
      </p>
    </div>
  );
};

export default About;