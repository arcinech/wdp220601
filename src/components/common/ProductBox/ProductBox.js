import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import { toggleCompare, setFavorite } from '../../../redux/productsRedux';
import { useDispatch, useSelector } from 'react-redux';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  oldPrice,
  id,
  favorite,
  compare,
  type,
}) => {
  const dispatch = useDispatch();
  const compareNumber = useSelector(state =>
    state.products.filter(item => item.compare === true)
  );

  const handleClick = e => {
    e.preventDefault();
    if (compareNumber.length < 4) {
      dispatch(toggleCompare(id));
    }
  };
  const [isFavorite, setIsFavorite] = useState(favorite || false);

  const changeFavorite = e => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(setFavorite({ id, favorite: isFavorite }));
  };

  if (!type) {
    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          <ProductImage id={id} />
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button
              variant={isFavorite ? 'active' : 'outline'}
              onClick={changeFavorite}
            >
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button variant={compare ? 'active' : 'outline'}>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={oldPrice ? styles.priceBox : ''}>
            {oldPrice && <p>$ {oldPrice}</p>}
            <div className={styles.price}>
              <Button noHover variant='small' className={styles.priceButton}>
                $ {price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          <ProductImage id={id} />
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttonsHot}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
          <div className={`row ${styles.timers}`}>
            <div className={`${styles.timer} col-3`}>
              <span className={styles.top}>25</span>
              <span className={styles.bottom}>DAYS</span>
            </div>
            <div className={`${styles.timer} col-3`}>
              <span className={styles.top}>10</span>
              <span className={styles.bottom}>HRS</span>
            </div>
            <div className={`${styles.timer} col-3`}>
              <span className={styles.top}>45</span>
              <span className={styles.bottom}>MINS</span>
            </div>
            <div className={`${styles.timer} col-3`}>
              <span className={styles.top}>30</span>
              <span className={styles.bottom}>SECS</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button variant={'outline'}>
              <FontAwesomeIcon icon={faEye} />
            </Button>
            <Button
              variant={isFavorite ? 'active' : 'outline'}
              onClick={changeFavorite}
            >
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button variant={compare ? 'active' : 'outline'}>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={oldPrice ? styles.priceBox : ''}>
            {oldPrice && <p>$ {oldPrice}</p>}
            <div className={styles.price}>
              <Button noHover variant='small' className={styles.priceButton}>
                $ {price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  type: PropTypes.any,
};

export default ProductBox;
