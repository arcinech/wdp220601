import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite, setProductRating } from '../../../redux/productsRedux';
import StarRating from '../StarRating/StarRating';
import { toggleCompare, setFavorite } from '../../../redux/productsRedux';

const ProductBox = ({ ...props }) => {
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
    dispatch(setFavorite({ id: props.id, favorite: isFavorite }));
  };

  const changeStarRating = starRating => {
    dispatch(setProductRating({ id: props.id, ...starRating }));
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <ProductImage id={props.id} />
        {props.promo && <div className={styles.sale}>{props.promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{props.name}</h5>
        <StarRating
          id={props.id}
          stars={props.stars}
          userRating={props.userRating}
          ratingActive={props.ratingActive}
          action={changeStarRating}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant={isFavorite ? 'active' : 'outline'} onClick={changeFavorite}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant={compare ? 'active' : 'outline'}
            onClick={e => handleClick(e)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={props.oldPrice ? styles.priceBox : ''}>
          {props.oldPrice && <p>$ {props.oldPrice}</p>}
          <div className={styles.price}>
            <Button noHover variant='small' className={styles.priceButton}>
              $ {props.price}
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
  userRating: PropTypes.number,
  ratingActive: PropTypes.bool,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
