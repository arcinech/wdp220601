import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = props => {
  const [starRating, setStarRating] = useState(props.stars || null);
  const [userRating, setUserRating] = useState(props.userRating || false);
  const [starHover, setStarHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starRatingValue = i + 1;

        const handleSubmit = () => {
          if (!userRating) {
            setUserRating(true);
          }
          setStarRating(starRatingValue);
          props.action({ starRatingValue, userRating });
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
                userRating && starRatingValue <= (starHover || starRating)
                  ? '#d58e32'
                  : 'black'
              }
              icon={starRatingValue <= (starHover || starRating) ? faStar : farStar}
              onMouseEnter={() => {
                setUserRating(true);
                setStarHover(starRatingValue);
              }}
              onMouseLeave={() => {
                setUserRating(userRating);
                setStarHover(null);
              }}
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
  userRating: PropTypes.bool,
  action: PropTypes.func,
};
