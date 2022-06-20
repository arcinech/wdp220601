import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <Navbar collapseOnSelect expand='sm'>
      <div className='container flex-wrap'>
        <div className={`order-sm-2 order-lg-1 ${styles.productSearch}`}>
          <ProductSearch />
        </div>
        <div className='order-sm-1 order-lg-2'>
          <Navbar.Toggle aria-controls='responsive-navbar' />
          <Navbar.Collapse id='responsive-navbar'>
            <Nav className={`'col-auto' + ${styles.menu}`}>
              <Nav.Link href='#' className={styles.active}>
                Home
              </Nav.Link>
              <Nav.Link href='#'>Furniture</Nav.Link>
              <Nav.Link href='#'>Chair</Nav.Link>
              <Nav.Link href='#'>Table</Nav.Link>
              <Nav.Link href='#'>Sofa</Nav.Link>
              <Nav.Link href='#'>Bedroom</Nav.Link>
              <Nav.Link href='#'>Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
