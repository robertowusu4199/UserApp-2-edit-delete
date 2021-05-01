import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import UserList from './Component/UsersList'
import UserForm from './Component/UserForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: "Freda Agyemang",
          email: "Agyemangfre@gmail.com",
          country: "Russia",
          phone: "+8 (963) 521-369",
          id: "123"
        },
        {
          name: "Kojo Chairman",
          email: "ChairmanKo@hotmail.com",
          country: "UK",
          phone: "+2 (585) 417-321",
          id: "456"
        },
        {
          name: "Christ Walka",
          email: "Christwalka1@gmail.com",
          country: "USA",
          phone: "+1 (963) 521-369",
          id: "789"
        },
      ]
    }
  }

  //whatever function or method that will be use to add a new item to the state should be created here... Adding new user
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }

  //Adding the delete user
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id)
    this.setState({
      users: undeletedUsers
    })
  }

  //Adding the edit user
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }


  render() {

    return (
      <div>
        <Container fluid style={{ marginTop: "3rem" }}>
          <Row>
            <Col md='4'>
              <UserForm addUser={this.addNewUser} />
            </Col>

            <Col>
              <UserList listData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App;
