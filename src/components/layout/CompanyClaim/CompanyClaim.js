import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartNumberLenght] = useState(cartNumber.toString().length);
  const [classes, setClasses] = useState(styles.cartCounter);
  useEffect(() => {
    if (cartNumberLenght === 5) {
      setClasses(styles.cartCounterFor5);
    } else if (cartNumberLenght <= 2) {
      setClasses(styles.cartCounter);
    } else if (cartNumberLenght === 3) {
      setClasses(styles.cartCounterFor3);
    } else if (cartNumberLenght === 4) {
      setClasses(styles.cartCounterFor4);
    } else if (cartNumberLenght > 5) {
      setClasses(styles.cartCounterFor5);
      setCartNumber(99999);
    }
  }, [cartNumberLenght]);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col text-center'>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col order-md-last text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={classes}>{cartNumber}</div>
            </a>
          </div>
          <div className={`col text-left order-md-first ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />{' '}
              <span className={styles.number}> 2300 - 3560 - 222</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
