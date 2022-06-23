import React, { useEffect } from 'react';
import useWindowSize from '../../common/useWindowSize/useWindowSize';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useState, useCallback, useRef } from 'react';
import { getAllProducts } from '../../../redux/productsRedux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  Swiper,
  SwiperSlide,
} from '../../../../node_modules/swiper/react/swiper-react.js';
import { Grid } from 'swiper';
import '../../../../node_modules/swiper/modules/grid/grid.scss';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';

const NewFurniture = () => {
  const newFurnitureSize = useWindowSize();
  const [galleryRows, setGalleryRows] = useState(null);
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButtone] = useState(false);
  const [activeCategory, setActiveCategory] = useState('bed');
  const categories = useSelector(state => getAllCategories(state));
  const products = useSelector(state => getAllProducts(state));
  const sliderRef = useRef(null);

  useEffect(() => {
    if (newFurnitureSize[0] < 768) {
      setGalleryRows(1);
    } else {
      setGalleryRows(2);
    }
  }, [newFurnitureSize]);

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
      setNextButtone(true);
    } else {
      setNextButtone(false);
    }
  }, []);

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);

  return (
    <div className={`${styles.root} container`}>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={styles.heading}>
            <h3>New furniture</h3>
          </div>
          <div className={'col-12 col-sm-6 col-md ' + styles.menu}>
            <ul>
              {categories.map(item => (
                <li key={item.id}>
                  <a
                    className={clsx({
                      [styles.active]: item.id === activeCategory,
                    })}
                    onClick={() => handleCategoryChange(item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={'col-auto ' + styles.dots}>
            <ul>
              <li>
                <a onClick={handlePrev} className={clsx(prevButton && styles.active)} />
              </li>
              <li>
                <a onClick={handleNext} className={clsx(nextButton && styles.active)} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={8}
        grid={{
          rows: galleryRows,
          fill: 'row',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 1,
              fill: 'row',
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
        }}
        slidespercolumnfill='row'
        spaceBetween={30}
        modules={[Grid]}
        className='mySwiper'
      >
        {categoryProducts.map(item => (
          <SwiperSlide className='col-5 col-md-3 col-xl-2' key={item.id}>
            <ProductBox {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewFurniture;

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};
