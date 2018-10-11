import React, { Component } from 'react'
import axios from 'axios'
import UserNameList from './UserNameList';
import CreateUserForm from './CreateUserForm';
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const StyledButton = styled(Button)`
&&&{
  margin-top:30px;
  background:white;
  box-shadow:3px 4px 1px black;
  :hover{
    box-shadow: 0 0 0 white;
  }
}
`

export default class Home extends Component {
  state = {
    users: [],
    createUser: false
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  toggleCreateUser = () => {
    this.setState({ createUser: !this.state.createUser })
  }

  addUser = async (newUser) => {
    const response = await axios.post('/api/users', newUser)
    const users = [...this.state.users]
    users.push(response.data)
    this.setState({ users })
  }

  render() {
    const userNameList =
      <UserNameList
        users={this.state.users}
        toggleCreateUser={this.toggleCreateUser}
      />

    const createUserForm =
      <CreateUserForm
        addUser={this.addUser}
        toggleCreateUser={this.toggleCreateUser}
      />

    return (
      <div>
        {this.state.createUser ? createUserForm : userNameList}
        <StyledButton circular onClick={this.toggleCreateUser}>
          {this.state.createUser ? 'Go Back' : 'Create User'}
        </StyledButton>
      </div>
    )
  }
}
