import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackContent.module.scss';

const FeedbackContent = props => {
  FeedbackContent.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
  };

  return (
    <div>
      <span className={styles.dip}>&apos;&apos;</span>
      <div>{props.content}</div>
      <div className={styles.author}>
        <div className={styles.photo}>
          <img src={`/images/feedback-${props.id}.jpg`} alt='photo' />
        </div>
        <div className={styles.name}>
          {props.name}
          <p className={styles.role}>Client</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackContent;
