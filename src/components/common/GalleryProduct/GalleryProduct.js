import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProductById,
  toggleCompare,
  setFavorite,
} from '../../../redux/productsRedux';
import StarRating from '../../common/StarRating/StarRating';
import styles from './GalleryProduct.module.scss';
import clsx from 'clsx';

const GalleryProduct = ({ id, setOldId, oldId, fadeProp, setFadeProp }) => {
  const product = useSelector(state => getProductById(state, oldId));
  const compareNumber = useSelector(state =>
    state.products.filter(item => item.compare === true)
  );
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(product.favorite || false);

  useEffect(() => {
    dispatch(setFavorite({ id, favorite: isFavorite }));
  }, [isFavorite]);

  useEffect(() => {
    if (oldId !== id) {
      setFadeProp('fade-out');
      const timeout = setInterval(() => {
        setOldId(id);
        setFadeProp('fade-in');
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [id]);

  const handleClick = e => {
    e.preventDefault();
    if (compareNumber.length < 4) {
      dispatch(toggleCompare(id));
    }
  };

  const changeFavorite = e => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.root}>
      <div className={clsx(fadeProp === 'fade-in' ? styles.fadein : styles.fadeout)}>
        <ProductImage id={oldId} />
      </div>
      <div className={styles.toolbox}>
        <Button
          variant={product.favorite ? 'active' : 'outline'}
          onClick={changeFavorite}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          <span className={styles.tooltip}>Favorite</span>
        </Button>
        <Button variant={product.compare ? 'active' : 'outline'} onClick={handleClick}>
          <FontAwesomeIcon icon={faExchangeAlt} />
          <span className={styles.tooltip}>Compare</span>
        </Button>
        <Button variant={'outline'}>
          <FontAwesomeIcon icon={faEye}>Watch</FontAwesomeIcon>
          <span className={styles.tooltip}>Watch</span>
        </Button>
        <Button variant={'outline'}>
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span className={styles.tooltip}>Add to Cart</span>
        </Button>
      </div>

      <div className={styles.content + ' shadow'}>
        <div className={styles.box}>
          <h5>{product.name}</h5>
          <StarRating {...product} />
          <div className={styles.price}>
            <div className={styles.newPrice}>$ {product.price}.00</div>
            {product.oldPrice && (
              <div className={styles.oldPrice}>$ {product.oldPrice}.00</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryProduct;

GalleryProduct.propTypes = {
  id: PropTypes.string,
  setId: PropTypes.func,
  oldId: PropTypes.string,
  setOldId: PropTypes.func,
  fadeProp: PropTypes.string,
  setFadeProp: PropTypes.func,
};
