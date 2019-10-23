import React from 'react';
import PropTypes from 'prop-types';
import styles from './controls.module.css';

const Controls = ({ onClick, currentPage, length }) => {
  return (
    <section className={styles.controls}>
      <button
        name="Назад"
        className={styles.button}
        disabled={currentPage === 1}
        onClick={e => onClick(e)}
        type="button"
      >
        Назад
      </button>
      <button
        name="Вперед"
        className={styles.button}
        disabled={currentPage === length}
        onClick={e => onClick(e)}
        type="button"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Controls;
