import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const ProductSearch = () => {
  const categories = useSelector(getAllCategories);

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul>
          <li>
            <a href='#'>Categories</a>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <a href='#'>{category.name}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
