import React from 'react';
import PropTypes from 'prop-types';
import styles from './controls.module.css';

const Controls = ({ onClickLeft, onClickRight, currentPage, length }) => {
  return (
    <section className={styles.controls}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={onClickLeft}
        type="button"
      >
        Назад
      </button>
      <button
        className={styles.button}
        disabled={currentPage === length}
        onClick={onClickRight}
        type="button"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Controls;
