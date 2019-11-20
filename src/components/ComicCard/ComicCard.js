import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComicCard.module.css';

const ComicCard = (props) => (
  <div className={styles.ComicCard}>
    ComicCard Component
    {props.comicData.title}
  </div>
);

ComicCard.propTypes = {};

ComicCard.defaultProps = {};

export default ComicCard;
