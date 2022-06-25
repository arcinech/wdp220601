import React from 'react';
import { useParams } from 'react-router';
// import PropTypes from 'prop-types';

const ProductPage = () => {
  const { productId } = useParams();

  return <div>This is {productId} ProductPage</div>;
};

// ProductPage.propTypes = {};

export default ProductPage;
