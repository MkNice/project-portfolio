import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.containerHeader}>
        <h2>Contact</h2>
        <span className={styles.line}></span>
      </div>
      <div className={styles.headerContent}>
        <h1>I'm Always Open To Discussing Product</h1>
        <h2>design work or partnerships.</h2>
        {isSubmitted ? (
          <div className={styles.thankYouMessage}>
            <h3>Спасибо за ваше сообщение!</h3>
            <p>
              К сожалению, данный функционал пока не доработан. Пожалуйста,
              свяжитесь со мной напрямую по email: <a href="Example@gmail.com">Example@gmail.com</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
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
        )}
      </div>
    </div>
  );
};

export default Contact;
