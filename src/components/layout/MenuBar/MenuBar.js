import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MenuBar = ({ children }) => {
  const menuBarLinks = [
    { id: 0, name: 'Home', hash: '/' },
    { id: 1, name: 'Furniture', hash: '/shop/furniture' },
    { id: 2, name: 'Chair', hash: '/shop/chair' },
    { id: 3, name: 'Table', hash: '/shop/table' },
    { id: 4, name: 'Sofa', hash: '/shop/sofa' },
    { id: 5, name: 'Bedroom', hash: '/shop/bedroom' },
    { id: 6, name: 'Blog', hash: '/blog' },
  ];

  return (
    <div className={styles.root}>
      <Navbar collapseOnSelect expand='sm'>
        <div className='container flex-wrap'>
          <div className={`order-sm-2 order-lg-1 ${styles.productSearch}`}>
            <ProductSearch />
          </div>
          <div className='order-sm-1 order-lg-2'>
            <Navbar.Toggle aria-controls='responsive-navbar' />
            <Navbar.Collapse id='responsive-navbar'>
              <Nav className={`col-auto + ${styles.menu}`}>
                {menuBarLinks.map(link => (
                  <NavLink
                    className={({ isActive }) =>
                      '' + (!isActive ? '' : `${styles.active}`)
                    }
                    key={link.id}
                    to={link.hash}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
