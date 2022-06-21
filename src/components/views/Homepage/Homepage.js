import React from 'react';
// import PropTypes from 'prop-types';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import StaticDeals from '../../features/StaticDeals/StaticDeals';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div>
    <FeatureBoxes />
    <StaticDeals />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
