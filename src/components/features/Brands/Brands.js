import { Button } from 'react-bootstrap';
import React from 'react';

import styles from './Brands.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <hr></hr>
        <div className='row d-flex justify-content-around'>
          <Button variant='dark'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <div className={`${styles.photo}`}>
            <img src={`/images/Brand-1.jpg`} alt='' />
          </div>
          <div className={`${styles.photo}`}>
            <img src={`/images/Brand-2.jpg`} alt='' />
          </div>
          <div className={` ${styles.photo}`}>
            <img src={`/images/Brand-3.jpg`} alt='' />
          </div>
          <div className={` ${styles.photo}`}>
            <img src={`/images/Brand-4.jpg`} alt='' />
          </div>
          <div className={` ${styles.photo}`}>
            <img src={`/images/Brand-5.jpg`} alt='' />
          </div>
          <div className={` ${styles.photo}`}>
            <img src={`/images/Brand-6.jpg`} alt='' />
          </div>
          <Button variant='dark'>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>

        <hr></hr>
      </div>
    </div>
  );
};

export default Brands;
