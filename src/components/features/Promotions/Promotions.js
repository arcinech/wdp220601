import React, { useState, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import ProductBox from '../../common/ProductBox/ProductBox';
import ProductImage from '../../common/ProductImage/ProductImage';
import Button from '../../common/Button/Button';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Swiper,
  SwiperSlide,
} from '../../../../node_modules/swiper/react/swiper-react.js';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';
import '../../../../node_modules/swiper/modules/grid/grid.scss';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';
import '../../../../node_modules/swiper/modules/effect-fade/effect-fade.scss';

import styles from './Promotions.module.scss';
import { getAllProducts } from '../../../redux/productsRedux';
SwiperCore.use([EffectFade, Pagination]);

const Promotions = () => {
  const hotdeals = useSelector(state => state.hotdeals);
  const products = useSelector(getAllProducts);

  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const sliderRef = useRef(null);

  const handlePrevButton = useCallback(e => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    if (e.type === 'mousedown') {
      setPrevButton(true);
    } else {
      setPrevButton(false);
    }
  }, []);

  const handleNextButton = useCallback(e => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    if (e.type === 'mousedown') {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  }, []);

  return (
    <div className={`${styles.root} container`}>
      <div className='row no-gutters align-items-end'>
        <div className={`col-4 ${styles.hover}`}>
          <div>
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              slidesPerView={1}
              effect='fade'
              fadeEffect={{
                crossFade: true,
              }}
              pagination={{ clickable: true }}
              className='mySwiper'
            >
              {hotdeals.map(item => (
                <SwiperSlide key={item.id}>
                  <div className={`${styles.hotdeals}`}>
                    <div>HOT DEALS</div>
                  </div>
                  <ProductBox key={item.id} {...item} type='hot' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={`col-6 ${styles.sales}`}>
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            spaceBetween={30}
            effect='fade'
            fadeEffect={{
              crossFade: true,
            }}
          >
            {products.map(product => (
              <SwiperSlide key={product.id}>
                <ProductImage id={product.id} key={product.id} />
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
                  <Button
                    className={`col-6 ${styles.arrow}`}
                    onClick={handlePrevButton}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </Button>
                  <Button
                    className={`col-6 ${styles.arrow}`}
                    onClick={handleNextButton}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
