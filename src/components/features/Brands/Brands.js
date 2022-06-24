import { Button } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getAllBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux/es/exports';
import Brand from '../../common/Brand/Brand';
import { useState, useCallback, useRef } from 'react';
import {
  Swiper,
  SwiperSlide,
} from '../../../../node_modules/swiper/react/swiper-react.js';
import '../../../../node_modules/swiper/modules/grid/grid.scss';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';

const Brands = () => {
  const brands = useSelector(getAllBrands);

  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(e => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    if (e.type === 'mousedown') {
      setPrevButton(true);
    } else {
      setPrevButton(false);
    }
  }, []);

  const handleNext = useCallback(e => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    if (e.type === 'mousedown') {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className='container'>
        <hr></hr>
        <div className='d-flex justify-content-around'>
          <Button
            variant='dark'
            onClick={handlePrev}
            className={prevButton && styles.active}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Swiper
            ref={sliderRef}
            slidesPerView={6}
            spaceBetween={30}
            className='mySwiper'
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              390: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            {brands.map(brand => (
              <SwiperSlide className='col-5 col-md-3 col-xl-2' key={brand.id}>
                <Brand key={brand.id} id={brand.id} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            variant='dark'
            onClick={handleNext}
            className={nextButton && styles.active}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>

        <hr></hr>
      </div>
    </div>
  );
};

Brands.propTypes = {
  id: PropTypes.number,
};

export default Brands;
