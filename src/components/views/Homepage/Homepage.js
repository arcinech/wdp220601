import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../features/Promotions/Promotions';
import StaticDeals from '../../features/StaticDeals/StaticDeals';
import Feedback from '../../features/Feedback/Feedback';


const Homepage = () => (
  <div className={styles.root}>
    <Promotions />
    <FeatureBoxes />
    <StaticDeals />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
