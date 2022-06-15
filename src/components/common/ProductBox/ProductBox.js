import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import { useDispatch } from 'react-redux';
import { setFavorite, setProductRating } from '../../../redux/productsRedux';
import StarRating from '../StarRating/StarRating';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  userRating,
  oldPrice,
  id,
  favorite,
  compare,
}) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(favorite || false);

  const changeFavorite = e => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(setFavorite({ id, favorite: isFavorite }));
  };

  const changeStarRating = starRating => {
    dispatch(setProductRating({ id, ...starRating }));
  };

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
        <StarRating stars={stars} userRating={userRating} action={changeStarRating} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant={isFavorite ? 'active' : 'outline'} onClick={changeFavorite}>
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
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.bool,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
