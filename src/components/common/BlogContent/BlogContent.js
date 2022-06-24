import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogContent.module.scss';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faComments } from '@fortawesome/free-solid-svg-icons';

const BlogContent = props => {
  BlogContent.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    comments: PropTypes.string,
    content: PropTypes.string,
  };

  return (
    <div className='container'>
      <div className={`${styles.box}`}>
        <div className={styles.blogData}>
          <div className={styles.data}>
            <p className={styles.date}>
              <FontAwesomeIcon icon={faCalendarDay} className='mr-2' />
              {props.date}
            </p>
            <p className={styles.comments}>
              <FontAwesomeIcon icon={faComments} className='mr-2' />
              {props.comments} Comments
            </p>
          </div>
        </div>
        <div className={`container ${styles.blogContent}`}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.content}>{props.content}</div>
          <div className={styles.button}>
            <Button variant='dark'>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
