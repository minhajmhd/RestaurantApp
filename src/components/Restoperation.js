import React,{useState} from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Restoperation({operate}) {
    const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // console.log(operate);
  return (
    <div>
        <Button  variant="secondary" onClick={handleShow}>
        Opening time 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Operation Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <ListGroup>
            <ListGroup.Item>Opening time :-</ListGroup.Item>
      <ListGroup.Item>Monday : {operate.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {operate.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {operate.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {operate.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {operate.Friday}</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
         </Modal>
    </div>
  )
}

export default Restoperation