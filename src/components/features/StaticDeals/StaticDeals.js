import styles from './StaticDeals.module.scss';
import React from 'react';
// import { useSelector } from 'react-redux';
// import { getStaticDeals } from '../../../redux/staticDealsRedux';

const SectionDeals = () => {
  // const deals = useSelector(getStaticDeals);

  return (
    <div className='container'>
      {/* <div className={styles.grid}>
        <div className={styles.first}>
          <img src={deals[0].image} alt='deal1' />
          <div className={styles.left}>
            <h3>{deals[0].name}</h3>
            <h1>{deals[0].subname}</h1>
            <h2 className={styles.boxed}>{deals[0].value}</h2>
          </div>
        </div>
        <div className={styles.second}>
          <img src={deals[1].image} alt='deal2' />
          <div className={styles.upperright}>
            <h3>
              {deals[1].name.split(' ')[0]} <span>{deals[1].name.split(' ')[1]}</span>
            </h3>
            <h4>{deals[1].subname}</h4>
            <h2>{deals[1].value}</h2>
          </div>
        </div>
        <div className={styles.third}>
          <img src={deals[2].image} alt='deal3' />
          <div className={styles.thirdContent}>
            <h4>
              {deals[2].name.split(' ')[0]} <span>{deals[2].name.split(' ')[1]} </span>
            </h4>
            <h5>{deals[2].subname}</h5>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SectionDeals;
