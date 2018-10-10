import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    const usersList = this.state.users.map((user, i) => {
      return(
        <div key={i}>
          <Link to={`/users/${user._id}`}>name: {user.name}</Link>
        </div>
      )
    })
    return (
      <div>
        {usersList}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.newUser.name} onChange={this.handleChange}/>

          <input type='submit' value='Create New Fatty'/>
        </form>
        
      </div>
    )
  }
}
