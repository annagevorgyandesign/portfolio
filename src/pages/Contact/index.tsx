import React from 'react';
import Contact from '../../components/Contact';
import styles from './styles.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      <Contact />
    </div>
  );
};

export default ContactPage;
