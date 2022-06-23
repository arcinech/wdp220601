import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import ProductImage from '../../common/ProductImage/ProductImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './CompareBar.module.scss';
import { removeCompare, setFavorite } from '../../../redux/productsRedux';

const CompareBar = () => {
  const dispatch = useDispatch();
  const compareProducts = useSelector(state =>
    state.products.filter(item => item.compare === true)
  );
  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(removeCompare(id));
  };
  const [isFavorite, setIsFavorite] = useState(compareProducts.favorite || false);

  const changeFavorite = e => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(setFavorite({ id: compareProducts.id, favorite: isFavorite }));
  };
  return (
    <nav className={styles.navbar}>
      <div className='row'>
        {compareProducts.map(item => (
          <div key={item.id} className='col-3'>
            <div className={styles.image}>
              <div className={styles.compare}>
                <Button variant='small'>Compate</Button>
              </div>
              <div className={styles.button}>
                <Button variant='small' onClick={e => handleClick(e, item.id)}>
                  <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
                </Button>
              </div>
              <ProductImage id={item.id} />
              <div className='row'>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.favorite}>
                  <Button
                    variant={isFavorite ? 'active' : 'outline'}
                    onClick={changeFavorite}
                  >
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                </div>
                <div className={item.oldPrice ? styles.priceBox : ''}>
                  {item.oldPrice && <p>$ {item.oldPrice}</p>}
                  <div className={styles.price}>
                    <Button noHover variant='small'>
                      $ {item.price}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CompareBar;
