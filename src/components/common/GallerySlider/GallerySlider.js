import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GallerySlider.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import Button from '../Button/Button';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const GalleryProduct = ({ setId, id, products }) => {
  // products = useSelector(state => getAllProducts(state));
  const [activePage, setActivePage] = useState(0);

  const leftClick = e => {
    e.preventDefault();
  };

  const rightClick = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.root}>
      <Button className={styles.leftarrow} onClick={leftClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <div className={styles.slide}>
        {products.slice(activePage * 6, (activePage + 1) * 6).map(item => {
          const handleClick = e => {
            e.preventDefault();
            setId(item.id);
          };

          return (
            <div
              key={item.id}
              className={clsx(styles.slideItem, item.id !== id ? styles.overlay : '')}
              onClick={handleClick}
            >
              <ProductImage {...item} />
            </div>
          );
        })}
      </div>
      <Button className={styles.rightarrow} onClick={rightClick}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </div>
  );
};

GalleryProduct.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  setId: PropTypes.func,
  products: PropTypes.array,
};

export default GalleryProduct;
