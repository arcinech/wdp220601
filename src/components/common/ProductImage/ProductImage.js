import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';
import { NavLink } from 'react-router-dom';

const ProductImage = props => {
  return (
    <NavLink to={`product/${props.id}`}>
      <img className={styles.photo} src={`/images/${props.id}.jpeg`} alt='fotels'></img>
    </NavLink>
  );
};

export default ProductImage;

ProductImage.propTypes = {
  id: PropTypes.string,
};
