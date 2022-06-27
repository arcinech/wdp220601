import React, { useState, useEffect } from 'react';
import styles from './FurnitureGallery.module.scss';
import { getAllProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import GalleryProduct from '../../common/GalleryProduct/GalleryProduct';
import GallerySlider from '../../common/GallerySlider/GallerySlider';
import Button from '../../common/Button/Button';
import { getStaticDeals } from '../../../redux/staticDealsRedux';
import ProductImage from '../../common/ProductImage/ProductImage';
import clsx from 'clsx';

const FurnitureGallery = () => {
  const [category, setCategory] = useState('featured');
  const [oldCategory, setOldCategory] = useState(category);
  const products = useSelector(state => getAllProducts(state));
  const selectedCategory = products.filter(item => item[oldCategory] === true);
  const [id, setId] = useState(selectedCategory[0].id);
  const [oldId, setOldId] = useState(id);
  const deal = useSelector(getStaticDeals);
  const [fadeProp, setFadeProp] = useState('fade-in');
  const [fadePropTab, setFadePropTab] = useState('fade-in');

  const galleryCategories = [
    { id: 0, name: 'FEATURED', category: 'featured' },
    { id: 1, name: 'TOP SELLER', category: 'topSeller' },
    { id: 2, name: 'SALE OFF', category: 'saleOff' },
    { id: 3, name: 'TOP RATED', category: 'topRated' },
  ];

  useEffect(() => {
    setOldId(selectedCategory[0].id);
    setId(selectedCategory[0].id);
  }, [oldCategory]);

  useEffect(() => {
    if (oldCategory !== category) {
      setFadePropTab('fade-out');
      const timeout = setInterval(() => {
        setOldCategory(category);
        setFadePropTab('fade-in');
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [category]);

  const categoryChange = e => {
    e.preventDefault();
    setCategory(e.currentTarget.getAttribute('data-category'));
  };

  return (
    <div className='container'>
      <div className={`row ${styles.root}`}>
        <div className='col-6'>
          <div className={styles.panelBar}>
            <div className='row align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Furniture Gallery</h3>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className='row'>
              {galleryCategories.map(({ id, name, ...item }) => (
                <div
                  onClick={categoryChange}
                  key={id}
                  data-category={item.category}
                  className={clsx(
                    'col',
                    styles.tabs,
                    item.category === category ? styles.active : ''
                  )}
                >
                  <div>{name}</div>
                </div>
              ))}
            </div>
            <div
              className={clsx(
                fadePropTab === 'fade-in' ? styles.fadein : styles.fadeout
              )}
            >
              <GalleryProduct
                id={id}
                oldId={oldId}
                setOldId={setOldId}
                fadeProp={fadeProp}
                setFadeProp={setFadeProp}
              />
            </div>
          </div>
          <div
            className={clsx(fadePropTab === 'fade-in' ? styles.fadein : styles.fadeout)}
          >
            <GallerySlider products={selectedCategory} setId={setId} id={id} />
          </div>
        </div>
        <div className={styles.deal + ' col-6'}>
          <ProductImage id={deal[3].id} />
          <div className={styles.dealContent}>
            <h3>
              <span>FROM</span>
              {deal[3].value}
            </h3>
            <h1>{deal[3].name}</h1>
            <Button variant='shopButton'>SHOP NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
