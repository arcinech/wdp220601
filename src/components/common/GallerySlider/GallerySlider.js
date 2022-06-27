import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './GallerySlider.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import Button from '../Button/Button';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Swiper,
  SwiperSlide,
} from '../../../../node_modules/swiper/react/swiper-react.js';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';

const GalleryProduct = ({ setId, id, products }) => {
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const sliderRef = useRef(null);

  const leftClick = useCallback(e => {
    e.preventDefault();
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev(6);
    if (e.type === 'mousedown') {
      setPrevButton(true);
    } else {
      setPrevButton(false);
    }
  }, []);

  const rightClick = useCallback(e => {
    e.preventDefault();
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext(6);
    if (e.type === 'mousedown') {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  }, []);

  return (
    <div className={styles.root}>
      <Button className={styles.leftarrow} onClick={leftClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <div className={styles.slide}>
        <Swiper
          ref={sliderRef}
          className='mySwiper'
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {products.map(item => {
            const handleClick = e => {
              e.preventDefault();
              setId(item.id);
            };

            return (
              <SwiperSlide key={item.id}>
                <div
                  className={clsx(
                    styles.slideItem,
                    item.id !== id ? styles.overlay : ''
                  )}
                  onClick={handleClick}
                >
                  <ProductImage {...item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Button className={styles.rightarrow} onClick={rightClick}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </div>
  );
};

GalleryProduct.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  setId: PropTypes.func,
  products: PropTypes.array,
};

export default GalleryProduct;
