import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import ProductBox from '../../common/ProductBox/ProductBox';
import ProductImage from '../../common/ProductImage/ProductImage';
import Button from '../../common/Button/Button';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Promotions.module.scss';

const Promotions = () => {
  const hotdeals = useSelector(state => state.hotdeals);
  const [activeDot] = useState(2);
  return (
    <div className={`${styles.root} container`}>
      <div className={`col-4 ${styles.hotdeals}`}>
        <div>HOT DEALS</div>
        <div className={`col-auto ${styles.dots}`}>
          <a className={clsx(styles.dot, styles.active)}>
            <span />
          </a>
          <a className={clsx(styles.dot)}>
            <span />
          </a>
        </div>
      </div>
      <div className='row no-gutters align-items-end'>
        <div className={`col-4 ${styles.hover}`}>
          <div>
            {hotdeals.map(item => {
              if (item.dotId === activeDot) {
                return <ProductBox key={item.id} {...item} type='hot' />;
              }
            })}
          </div>
        </div>
        <div className={styles.sales}>
          <ProductImage id='aenean-ru-bristique-22' />
          <div className={styles.button}>
            <Button variant='white'>SHOP NOW</Button>
          </div>
          <div className={styles.content}>
            <div>
              <span className={styles.up}>
                INDOOR <b>FURNITURE</b>
              </span>
              <br />{' '}
              <span className={styles.down}>SAVE UP TO 50% OF ALL FURNITURE</span>
            </div>
          </div>
          <div className={`row ${styles.arrows}`}>
            <div className={`col-6 ${styles.arrow}`}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className={`col-6 ${styles.arrow}`}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
