import React, { PropTypes } from 'react';

import frameSrc from './img/macbook.png';
import styles from './styles.module.css';

const Macbook = ({ children }) => (
  <div className={styles.macbook}>
    <img src={frameSrc} alt="Macbook Frame" role="presentation" />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

Macbook.propTypes = {
  children: PropTypes.node,
};

export default Macbook;
