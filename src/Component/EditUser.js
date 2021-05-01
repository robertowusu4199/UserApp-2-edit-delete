import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";


class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: props.userInfo.name,   //prefilling the information, no more empty state
            email: props.userInfo.email,
            country: props.userInfo.country,
            phone: props.userInfo.phone,
            id: props.userInfo.id
        }
    }
    
    //For the onChange
    handleChange = (e) => {
        e.preventDefault();
        //this.setState is use when you want update the state
        this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(this.state); //being able update or retrive whatever the user types in      
    }

    //For the onSubmit
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state) //accessing the addUser and the newUser, adding users //now is can be change editUser and it takes two parameter
        
        //setting the state back empty or default, taking off the details provided
        this.setState={
            name:"",
            email:"",
            country:"",
            phone:"",
        }
        console.log("form submitted: ", this.state) //can be deleted 

        this.props.closeModal()


    }

    render() {
        return (
            //submitting a form using onSubmit and creating eventHandler
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter country" name="country" value={this.state.country}  onChange={this.handleChange}  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone-number" name="number" value={this.state.number} onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}


export default EditUser;