import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuickViewProduct.module.scss';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import ProductImage from '../../common/ProductImage/ProductImage';
import Button from '../../common/Button/Button';
import { capFirstLetter } from '../../../utils/capFirstLetter';

const QuickViewProduct = props => {
  const [show, setShow] = useState(false);

  const productProps = [
    { id: 0, name: 'Category', props: capFirstLetter(props.category) },
    { id: 1, name: 'Old Price', props: props.oldPrice || '-' },
    { id: 2, name: 'New Price', props: props.price },
    { id: 3, name: 'Rating', props: props.stars },
    { id: 4, name: 'User Rating', props: props.userRating || 'None' },
    { id: 5, name: 'Sale', props: props.promo === 'sale' ? 'Yes' : 'No' },
    { id: 6, name: 'New?', props: props.newFurniture ? 'Yes' : 'No' },
  ];

  const handleClose = e => {
    setShow(false);
  };
  const handleShow = e => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <Button variant='small' onClick={handleShow}>
        Quick View
      </Button>

      <Modal show={show} onHide={handleClose} centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title className={styles.header}>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <ProductImage id={props.id} />
              </Col>
              <Col xs={6} md={2}>
                {productProps
                  .filter((productProp, index) => index < 5)
                  .map(productProp => (
                    <>
                      <span className={styles.property} key={productProp.id}>
                        {productProp.name}
                      </span>
                      <p>{productProp.props}</p>
                    </>
                  ))}
              </Col>
              <Col xs={6} md={2}>
                {productProps
                  .filter((productProp, index) => index >= 5)
                  .map(productProp => (
                    <>
                      <span className={styles.property} key={productProp.id}>
                        {productProp.name}
                      </span>
                      <p>{productProp.props}</p>
                    </>
                  ))}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuickViewProduct;

QuickViewProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  newFurniture: PropTypes.bool,
  userRating: PropTypes.number,
  oldPrice: PropTypes.number,
};
