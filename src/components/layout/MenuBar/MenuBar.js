import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MenuBar = ({ children }) => {
  const menuBarLinks = [
    { id: 0, name: 'Home' },
    { id: 1, name: 'Furniture' },
    { id: 2, name: 'Chair' },
    { id: 3, name: 'Table' },
    { id: 4, name: 'Sofa' },
    { id: 5, name: 'Bedroom' },
    { id: 6, name: 'Blog' },
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
              <Nav className={`'col-auto' + ${styles.menu}`}>
                {menuBarLinks.map(link => (
                  <Nav.Link
                    as={NavLink}
                    key={link.id}
                    to={link.name === 'Home' ? '/' : `/shop/${link.name}`}
                  >
                    {link.name}
                  </Nav.Link>
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
