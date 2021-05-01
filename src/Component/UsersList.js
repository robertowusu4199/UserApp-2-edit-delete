import React from 'react';
import { Container, Row} from 'react-bootstrap';
import User from './User'

const UserList = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.listData.map((user, index) => {
                        return <User userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser} /> //creating the delete button index can be change to user.id 
                    })
                }

            </Row>
        </Container>
    )
}

export default UserList;