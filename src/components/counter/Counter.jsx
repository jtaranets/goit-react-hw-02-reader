import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';

const Counter = ({ total, currentValue }) => (
  <p className={styles.counter}>
    {currentValue}/{total}
  </p>
);

Counter.propTypes = {
  currentValue: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
