import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackContent.module.scss';

const FeedbackContent = ({ active }) => {
  console.log(active);
  return (
    <div>
      <span className={styles.dip}>&apos;&apos;</span>
      <div>{active.content}</div>
      <div className={styles.author}>
        <div className={styles.photo}>
          <img src={`/images/feedback-${active.id}.jpg`} alt='photo' />
        </div>
        <div className={styles.name}>
          {active.name}
          <p className={styles.role}>Client</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackContent;

FeedbackContent.propTypes = {
  children: PropTypes.node,
  active: PropTypes.object,
};
