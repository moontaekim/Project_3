import React, { Component } from 'react'
import axios from 'axios'
import UserNameList from './UserNameList';
import CreateUserForm from './CreateUserForm';
import styled from 'styled-components'


export default class Home extends Component {
  state = {
    users: [],
    newUser: {
      foodChallenges: [],
      completedChallenges: [],
      name: '',
      budget: 500,
      fatness: 0,
      img: ''
    },
    createUser: false
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
  }

  toggleCreateUser = () => {
    this.setState({createUser: !this.state.createUser})
  }

  handleChange = (event) => {
    const newUser = {...this.state.newUser}
    newUser[event.target.name]= event.target.value
    this.setState({ newUser })
    console.log(newUser)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/users', this.state.newUser)
    const users = [...this.state.users]
    users.push(response.data)
    this.setState({users})
  }

  render() {
    const userNameList =         
    <UserNameList
    users={this.state.users}
    />

    const createUserForm =
    <CreateUserForm
    handleSubmit={this.handleSubmit}
    newUser={this.state.newUser}
    handleChange={this.handleChange}
    toggleCreateUser={this.toggleCreateUser}
  />

    return (
      <div>
        {this.state.createUser ? createUserForm : userNameList}
        <button onClick={this.toggleCreateUser}>
        {this.state.createUser ? 'Users' : 'Create User'}
        </button>
      </div>
    )
  }
}
