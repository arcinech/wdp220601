import { Button } from 'react-bootstrap';
import React from 'react';

import styles from './Brands.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getAllBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux/es/exports';

const Brands = () => {
  const brands = useSelector(getAllBrands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <hr></hr>
        <div className='row d-flex justify-content-around'>
          <Button variant='dark'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          {brands.map(brand => (
            <div key={brand.id} className={`${styles.photo}`}>
              <img src={`/images/Brand-${brand.id}.jpg`} alt='' />
            </div>
          ))}
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
