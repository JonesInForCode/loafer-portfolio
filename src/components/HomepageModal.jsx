import React, { useState } from 'react';
import styles from './Layout.module.css'

const HomepageModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.homepageModal}>
      <div className={styles.homepageModalContent}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default HomepageModal;