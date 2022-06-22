import React from 'react';
// import PropTypes from 'prop-types';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/Brands';
import StaticDeals from '../../features/StaticDeals/StaticDeals';
import Feedback from '../../features/Feedback/Feedback';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGallery';
const Homepage = () => (
  <div>
    <FeatureBoxes />
    <StaticDeals />
    <NewFurniture />
    <FurnitureGallery />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
