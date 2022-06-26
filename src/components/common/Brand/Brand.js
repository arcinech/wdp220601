import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brand.module.scss';

const Brand = props => {
  Brand.propTypes = {
    id: PropTypes.number,
  };
  return (
    <div className={`${styles.photo}`}>
      <img src={`/images/Brand-${props.id}.jpg`} alt='' />
    </div>
  );
};

export default Brand;
