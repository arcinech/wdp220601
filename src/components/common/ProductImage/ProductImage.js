import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = props => {
  ProductImage.propTypes = {
    id: PropTypes.string,
  };
  return (
    <div>
      <img className={styles.photo} src={`/images/${props.id}.jpeg`} alt='fotels'></img>
    </div>
  );
};

export default ProductImage;
