import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../features/Swipeable/Swipeable';
import { useState, useCallback, useRef } from 'react';
import { getAllProducts } from '../../../redux/productsRedux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const NewFurniture = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const categories = useSelector(state => getAllCategories(state));
  const products = useSelector(state => getAllProducts(state));
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    setActivePage();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setActivePage();
  }, []);

  // const handlePageChange = newPage => {
  //   setActivePage(newPage);
  // };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);
  // const pagesCount = Math.ceil(categoryProducts.length / 8);

  // const dots = [];
  // for (let i = 0; i < pagesCount; i++) {
  //   dots.push(
  //     <li key={i}>
  //       <a
  //         onClick={() => handlePageChange(i)}
  //         className={i === activePage && styles.active}
  //       >
  //         page {i}
  //       </a>
  //     </li>
  //   );
  // }

  return (
    <div className={`${styles.root} container`}>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={'col-auto ' + styles.heading}>
            <h3>New furniture</h3>
          </div>
          <div className={'col ' + styles.menu}>
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
                <a onClick={handlePrev} className={activePage && styles.active} />
              </li>
              <li>
                <a onClick={handleNext} className={activePage && styles.active} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={5}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        slidesPerColumnFill='row'
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className='mySwiper'
      >
        {categoryProducts.map(item => (
          <SwiperSlide key={item.id}>
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
