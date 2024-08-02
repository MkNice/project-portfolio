import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.containerHeader}>
        <h2>About</h2>
        <span className={styles.line}></span>
      </div>
      <h1>I'm Always Open To Discussing Product</h1>
      <h2>design work or partnerships.</h2>
      <form>
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
