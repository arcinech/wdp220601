import React, { useState } from 'react';

import styles from './Feedback.module.scss';

import { useSelector } from 'react-redux';
import {
  Swiper,
  SwiperSlide,
} from '../../../../node_modules/swiper/react/swiper-react.js';
import { Grid } from 'swiper';
import '../../../../node_modules/swiper/modules/grid/grid.scss';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';
import { getAllFeedbacks } from '../../../redux/feedbackRedux';
import FeedbackContent from '../../common/FeedbackContent/FeedbackContent';

const Feedback = () => {
  const feedbacks = useSelector(state => getAllFeedbacks(state));
  const [activeFeedback] = useState(feedbacks.filtre(item => item.id === 1));

  return (
    <div className={`${styles.root} container`}>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={'col-auto ' + styles.heading}>
            <h3>Feedback</h3>
          </div>
          <div className={'col-auto ' + styles.dots}>
            <ul>
              <li>
                <a className={styles.active} />
              </li>
              <li>
                <a />
              </li>
            </ul>
          </div>
        </div>
        <Swiper>
          <SwiperSlide key='ss'>
            <FeedbackContent active={activeFeedback} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
