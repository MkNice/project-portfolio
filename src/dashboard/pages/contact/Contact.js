import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.containerHeader}>
        <h2>Contact</h2>
        <span className={styles.line}></span>
      </div>
      <div className={styles.headerContent}>
        <h1>I'm Always Open To Discussing Product</h1>
        <h2>design work or partnerships.</h2>
        <form>
          <input type="text" name="name" placeholder="Name *" required />
          <input type="email" name="email" placeholder="Email *" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Message *"
            required
          ></textarea>
          <div className={styles.containerBtn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
