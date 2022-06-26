import React, { useState, useCallback, useRef } from 'react';
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

  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(e => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    if (e.type === 'mousedown') {
      setPrevButton(true);
    } else {
      setPrevButton(false);
    }
  }, []);

  const handleNext = useCallback(e => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    if (e.type === 'mousedown') {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  }, []);

  return (
    <div className={`${styles.root} container`}>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={`col ${styles.heading}`}>
            <h3>Client Feedback</h3>
          </div>
          <div className={`col-auto ${styles.dots}`}>
            <a className={clsx(styles.dot, styles.active)} onClick={handlePrev}>
              <span />
            </a>
            <a className={clsx(styles.dot)} onClick={handleNext}>
              <span />
            </a>
          </div>
        </div>
        <Swiper ref={sliderRef} slidesPerView={1}>
          {feedbacks.map(feedback => (
            <SwiperSlide key={feedback.id}>
              <FeedbackContent
                id={feedback.id}
                name={feedback.name}
                content={feedback.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  content: PropTypes.string,
};
