import React from 'react';
import { getAllBlogs } from '../../../redux/blogsRedux';
import { useSelector } from 'react-redux';
import BlogContent from '../../common/BlogContent/BlogContent';
import PropTypes from 'prop-types';

import styles from './Blogs.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../node_modules/swiper/modules/grid/grid.scss';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';

const Blog = () => {
  const blogs = useSelector(getAllBlogs);

  return (
    <div className={`${styles.root} container`}>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={styles.heading}>
            <h3>Latest Blog</h3>
          </div>
          <span className='col '></span>
          <div>
            <div className={styles.dots}>
              <ul>
                <li>
                  <a className={styles.active} />
                </li>
                <li>
                  <a />
                </li>
                <li>
                  <a />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Swiper slidesPerView={3}>
          {blogs.map(blog => (
            <SwiperSlide className='' key={blog.id}>
              <BlogContent
                id={blog.id}
                photo={blog.photo}
                name={blog.name}
                date={blog.date}
                comments={blog.comments}
                content={blog.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Blog.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.string,
  content: PropTypes.string,
};

export default Blog;
