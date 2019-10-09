import React from 'react';
import PropTypes from 'prop-types';
import styles from './publication.module.css';

const Publication = ({ article }) => (
  <article className={styles.publication}>
    <h2>{article.title}</h2>
    <p> {article.text}</p>
  </article>
);

Publication.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Publication;
