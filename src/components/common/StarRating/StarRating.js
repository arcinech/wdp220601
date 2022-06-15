import React, { useState } from 'react';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = () => {
  const [starRating, setStarRating] = useState(null);
  const [starHover, setStarHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starRatingValue = i + 1;

        return (
          <label className={styles.star} key={i}>
            <input
              type='radio'
              name='rating'
              value={starRatingValue}
              onClick={() => setStarRating(starRatingValue)}
            />
            <FontAwesomeIcon
              color={starRatingValue <= (starHover || starRating) ? '#d58e32' : 'black'}
              icon={faStar}
              onMouseEnter={() => setStarHover(starRatingValue)}
              onMouseLeave={() => setStarHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
