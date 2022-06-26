import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import clsx from 'clsx';

import { useSelector } from 'react-redux';
import {
  Swiper,
  SwiperSlide,
} from '../../../../node_modules/swiper/react/swiper-react.js';
import '../../../../node_modules/swiper/modules/grid/grid.scss';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';
import { getAllFeedbacks } from '../../../redux/feedbackRedux';
import FeedbackContent from '../../common/FeedbackContent/FeedbackContent';

const Feedback = () => {
  const feedbacks = useSelector(state => getAllFeedbacks(state));
  const [activeFeedback] = useState(feedbacks.filter(item => item.id === 1));

  return (
    <div className={`${styles.root} container`}>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={`col ${styles.heading}`}>
            <h3>Client Feedback</h3>
          </div>
          <div className={`col-auto ${styles.dots}`}>
            <a className={clsx(styles.dot, styles.active)}>
              <span />
            </a>
            <a className={clsx(styles.dot)}>
              <span />
            </a>
          </div>
        </div>
        <Swiper>
          <SwiperSlide key='ss'>
            <FeedbackContent active={activeFeedback[0]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;

FeedbackContent.propTypes = {
  children: PropTypes.node,
};
