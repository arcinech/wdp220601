import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import QuickViewProduct from '../../features/QuickViewProduct/QuickViewProduct';
import ProductImage from '../ProductImage/ProductImage';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from '../StarRating/StarRating';
import { toggleCompare, setFavorite } from '../../../redux/productsRedux';
import { useLocalStorage } from '../../../utils/useLocalStorage';

const ProductBox = ({ ...props }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useLocalStorage(
    `${props.id}-favorite`,
    props.favorite || false
  );

  const compareNumber = useSelector(state =>
    state.products.filter(item => item.compare === true)
  );

  const handleClick = e => {
    e.preventDefault();
    if (compareNumber.length < 4) {
      dispatch(toggleCompare({ id: props.id }));
    }
  };

  useEffect(() => {
    dispatch(setFavorite({ id: props.id, favorite: isFavorite }));
  }, [isFavorite]);

  const changeFavorite = e => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };
  if (!props.type) {
    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          <ProductImage id={props.id} />
          {props.promo && <div className={styles.sale}>{props.promo}</div>}
          <div className={styles.buttons}>
            <QuickViewProduct {...props} />
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
          />
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
            <Button
              variant={props.compare ? 'active' : 'outline'}
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
  } else {
    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          <ProductImage id={props.id} />
          {props.promo && <div className={styles.sale}>{props.promo}</div>}
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
          <h5>{props.name}</h5>
          <StarRating
            id={props.id}
            stars={props.stars}
            userRating={props.userRating}
            ratingActive={props.ratingActive}
          />
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
            <Button variant={props.compare ? 'active' : 'outline'}>
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
  }
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
  type: PropTypes.any,
};

export default ProductBox;
