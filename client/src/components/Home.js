import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  state = {
    users: []
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
  }
  render() {
    const userList = this.state.users.map((user, i) => {
      return(
        <div>
          <Link to={`/users/${user._id}`}>name: {user.name}</Link>
        </div>
      )
    })
    return (
      <div>
        {userList}
      </div>
    )
  }
}
