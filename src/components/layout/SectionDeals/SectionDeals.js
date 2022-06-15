import styles from './SectionDeals.module.scss';
import React from 'react';

const SectionDeals = () => {
  return (
    <div>
      <div className={'row ' + styles.root}>
        <div className={'col ' + styles.large}>
          <img src='/images/aenean-ru-bristique-1.jpeg' alt='deal1' />
        </div>
        <div className={'col ' + styles.smaller}>
          <div>
            <img src='/images/aenean-ru-bristique-1.jpeg' alt='deal1' />
          </div>
          <div>
            <img src='/images/aenean-ru-bristique-1.jpeg' alt='deal1' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDeals;
