import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = props => {
  const [starRating] = useState(props.stars || null);
  const [userRating, setUserRating] = useState(props.userRating || null);
  const [ratingActive, setRatingActive] = useState(props.ratingActive || false);
  const [starHover, setStarHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starRatingValue = i + 1;

        const handleSubmit = () => {
          if (starRatingValue === userRating && ratingActive) {
            setUserRating(null);
            setRatingActive(false);
          } else if (starRatingValue !== userRating) {
            setUserRating(starRatingValue);
            setRatingActive(true);
          }
          // setUserRating(starRatingValue);
          props.action({ userRating: starRatingValue, ratingActive: ratingActive });
        };

        const handleMouseOnStar = () => {
          // if (ratingActive) {
          //   setRatingActive(true);
          // }
          setStarHover(starRatingValue);
        };

        const handleMouseLeaveStar = () => {
          // if (ratingActive) {
          //   setRatingActive(false);
          // }
          setStarHover(null);
        };

        return (
          <label className={styles.star} key={i}>
            <input
              type='radio'
              name='rating'
              value={starRatingValue}
              onClick={handleSubmit}
            />
            <FontAwesomeIcon
              color={
                ratingActive &&
                starRatingValue <= (starHover || userRating || starRating)
                  ? '#d58e32'
                  : 'black'
              }
              icon={
                starRatingValue <=
                (starHover || (ratingActive && userRating) || starRating)
                  ? faStar
                  : farStar
              }
              onMouseEnter={handleMouseOnStar}
              onMouseLeave={handleMouseLeaveStar}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  ratingActive: PropTypes.bool,
  action: PropTypes.func,
};
