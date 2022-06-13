import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import ProductImage from '../../common/ProductImage/ProductImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

import styles from './CompareBar.module.scss';
import { removeCompare } from '../../../redux/productsRedux';

const CompareBar = () => {
  const dispatche = useDispatch();
  const compareProducts = useSelector(state =>
    state.products.filter(item => item.compare === true)
  );
  const handleClick = (e, id) => {
    e.preventDefault();
    dispatche(removeCompare(id));
  };
  return (
    <nav className={styles.navbar}>
      <div className='row'>
        {compareProducts.map(item => (
          <div key={item.id} className='col-3'>
            <div className={styles.image}>
              <div className={styles.compare}>
                <Button variant='small'>Compate</Button>
              </div>
              <div className={styles.button}>
                <Button variant='small' onClick={e => handleClick(e, item.id)}>
                  <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
                </Button>
              </div>
              <ProductImage id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CompareBar;
