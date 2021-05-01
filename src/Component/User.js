import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditUser from './EditUser'

const User = (props) => {
    const [show, setShow] = useState(false); //adding the Edit button

    const handleClose = () => setShow(false); //adding the Edit button
    const handleShow = () => setShow(true);   //adding the Edit button
    
    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id);
        console.log('Item deleted!') //this can be taking off after seeing the event working
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header> 
                <Modal.Body> <EditUser userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} /> </Modal.Body>  
            </Modal>


            <Col md='4'>
                <br />
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            Contact Info
                </Card.Subtitle>
                        <Card.Title>{props.userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>Email: {props.userInfo.email}</p>
                            <p>Country: {props.userInfo.country}</p>
                            <p>Phone number: {props.userInfo.phone}</p>
                        </Card.Text>
                        <Card.Link herf="#" onClick={handleShow}>Edit</Card.Link>
                        <Card.Link herf="#">
                            <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default User;