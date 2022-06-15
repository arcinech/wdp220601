import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = props => {
  const [starRating, setStarRating] = useState(props.stars || null);
  const [starHover, setStarHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starRatingValue = i + 1;

        const handleSubmit = () => {
          setStarRating(starRatingValue);
          props.action(starRatingValue);
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
              color={starRatingValue <= (starHover || starRating) ? '#d58e32' : 'grey'}
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

StarRating.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  action: PropTypes.func,
};
