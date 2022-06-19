import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';

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
          <div className={styles.heading}>
            <h3>Client Feedback</h3>
          </div>
          <span className='col '></span>
          <div>
            <div className={styles.dots}>
              <ul>
                <li>
                  <a className={styles.active} />
                </li>
                <li>
                  <a />
                </li>
                <li>
                  <a />
                </li>
              </ul>
            </div>
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
