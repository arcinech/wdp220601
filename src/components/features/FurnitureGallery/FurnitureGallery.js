import React, { useState } from 'react';
import styles from './FurnitureGallery.module.scss';
import { getAllProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import GalleryProduct from '../../common/GalleryProduct/GalleryProduct';
import GallerySlider from '../../common/GallerySlider/GallerySlider';
import Button from '../../common/Button/Button';
import { getStaticDeals } from '../../../redux/staticDealsRedux';
import ProductImage from '../../common/ProductImage/ProductImage';
import { Nav } from 'react-bootstrap';
import clsx from 'clsx';

const FurnitureGallery = () => {
  const products = useSelector(getAllProducts);
  const [id, setId] = useState(products[0].id);
  const deal = useSelector(getStaticDeals);

  const navLinksGallery = [
    { id: 0, name: 'FEATURED', href: '/featured' },
    { id: 1, name: 'TOP SELLER', href: '/topseller' },
    { id: 2, name: 'SALE OFF', href: '/saleoff' },
    { id: 3, name: 'TOP RATED', href: '/toprated' },
  ];

  return (
    <div className={`container ${styles.root}`}>
      <div className={`row ${styles.panelBar}`}>
        <div className='col col-12 col-md-6 no-gutters align-items-end'>
          <div className={`row ${styles.heading}`}>
            <h3>Furniture Gallery</h3>
          </div>
          <div>
            <Nav fill variant='tabs-list' defaultActiveKey='/topseller'>
              {navLinksGallery.map(galleryLink => (
                <Nav.Item key={galleryLink.id} className={styles.navitem}>
                  <Nav.Link className={clsx(styles.navlink)} eventKey={galleryLink.id}>
                    {galleryLink.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <GalleryProduct className='d-none' id={id} />
          </div>
          <GallerySlider products={products} setId={setId} id={id} />
        </div>
        <div className={`col col-0 col-md-6 d-none d-md-flex ${styles.deal}`}>
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
