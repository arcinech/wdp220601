import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';

import styles from './Promotions.module.scss';

const Promotions = () => {
  const hotdeals = useSelector(state => state.hotdeals);
  console.log(hotdeals);
  const [activeDot] = useState(2);
  return (
    <div className={`${styles.root} container`}>
      <div className='row no-gutters align-items-end'>
        <div className={`col-4 ${styles.hover}`}>
          <div className={styles.hotdeals}>
            <div>HOT DEALS</div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={true && styles.active} />
                </li>
                <li>
                  <a className={false && styles.active} />
                </li>
                <li>
                  <a className={false && styles.active} />
                </li>
              </ul>
            </div>
          </div>
          <div>
            {hotdeals.map(item => {
              console.log(item.dotId, activeDot);
              if (item.dotId === activeDot) {
                return <ProductBox {...item} />;
              }
            })}
          </div>
        </div>
        <div className='col-8'>dupa2</div>
      </div>
    </div>
  );
};

export default Promotions;
