import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeatureBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureBox = ({ active, icon, children }) => (
  <div className={styles.root + (active ? ' ' + styles.active : '')}>
    {icon && (
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
