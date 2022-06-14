import React, { useState } from 'react';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className={styles.star} key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              color={ratingValue <= rating ? '#d58e32' : 'black'}
              icon={faStar}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
