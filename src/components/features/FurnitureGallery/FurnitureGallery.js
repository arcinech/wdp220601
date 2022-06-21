import React, { useState } from 'react';
import styles from './FurnitureGallery.module.scss';
import { getAllProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import GalleryProduct from '../../common/GalleryProduct/GalleryProduct';
import GallerySlider from '../../common/GallerySlider/GallerySlider';
import Button from '../../common/Button/Button';
import { getStaticDeals } from '../../../redux/staticDealsRedux';
import ProductImage from '../../common/ProductImage/ProductImage';

const FurnitureGallery = () => {
  const products = useSelector(getAllProducts);
  const [id, setId] = useState(products[0].id);
  const deal = useSelector(getStaticDeals);

  return (
    <div className='container'>
      <div className={`row ${styles.root}`}>
        <div className='col-6'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Furniture Gallery</h3>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className='row'>
              <div className={`col ${styles.tabs}`}>
                <div>{'featured'.toUpperCase()}</div>
              </div>
              <div className={`col ${styles.tabs}`}>{'top seller'.toUpperCase()}</div>
              <div className={`col ${styles.tabs} ${styles.active}`}>
                {'Sale off'.toUpperCase()}
              </div>
              <div className={`col ${styles.tabs}`}>{'Top rated'.toUpperCase()}</div>
            </div>
            <div>
              <GalleryProduct id={id} />
            </div>
          </div>
          <div>
            <GallerySlider products={products} setId={setId} id={id} />
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
