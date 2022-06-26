import React from 'react';
import styles from './ProductList.module.scss';
// import PropTypes from 'prop-types';

const ProductList = () => (
  <div className={`${styles.root} container`}>
    <div className='row'>
      <div className='col-12'>Banner</div>
    </div>
    <div className='row'>
      <div className='col-9'>ProductList</div>
      <div className='col-3'>Filters</div>
    </div>
    <div className='row'>
      <div className='col-12'>Brands</div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
