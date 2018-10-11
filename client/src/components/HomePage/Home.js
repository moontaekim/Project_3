import React, { Component } from 'react'
import axios from 'axios'
import UserNameList from './UserNameList';
import CreateUserForm from './CreateUserForm';
import { Button } from 'semantic-ui-react'



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
    }
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
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

    return (
      <div>
        <UserNameList
          users={this.state.users}
          />
        <CreateUserForm
          handleSubmit={this.handleSubmit}
          newUser={this.state.newUser}
          handleChange={this.handleChange}
        />
        <Button>Click me</Button>
      </div>
    )
  }
}
