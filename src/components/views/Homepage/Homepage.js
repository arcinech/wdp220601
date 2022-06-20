import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../features/Promotions/Promotions';

const Homepage = () => (
  <div className={styles.root}>
    <Promotions />
    <FeatureBoxes />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
