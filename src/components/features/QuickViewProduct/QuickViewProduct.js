import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../../common/Button/Button';

const QuickViewProduct = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='small' onClick={handleShow}>
        Quick View
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are You sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this Post from the app.
          <br />
          Are You sure You want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuickViewProduct;
