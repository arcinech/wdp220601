import React from 'react';
// import PropTypes from 'prop-types';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/Brands';
import StaticDeals from '../../features/StaticDeals/StaticDeals';
import Feedback from '../../features/Feedback/Feedback';
import Promotions from '../../features/Promotions/Promotions';
import Blogs from '../../features/Blogs/Blogs';

const Homepage = () => (
  <div>
    <Promotions />
    <FeatureBoxes />
    <StaticDeals />
    <NewFurniture />
    <Blogs />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
