import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAllCategories } from '../../../redux/categoriesRedux.js';
import { getNewProducts } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAllCategories(state),
  products: getNewProducts(state),
});

export default connect(mapStateToProps)(NewFurniture);
