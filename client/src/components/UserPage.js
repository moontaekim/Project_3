import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserPage extends Component {
  state = {
    user: {}
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    console.log(userId)
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({user: response.data})
  }

  componentDidMount = () => {
    this.getUser()
  }

  handleDelete = async (someId) => {
    await axios.delete(`/api/users/${someId}`)
    await this.getUser()
  }


  render() {
    return (
      <div>
        <Link to="/" onClick={() => this.handleDelete(this.state.user._id)}>delete</Link>
        <div>Name: {this.state.user.name}</div>
        <div>Budget: $ {this.state.user.budget}</div>
        <div>Fatness: {this.state.user.fatness}</div>
        <Link to={`/users/${this.state.user._id}/challenges`}>Food Challenges</Link>
        <div><Link to={`/users/${this.state.user._id}/completed`}>Completed Challenges</Link></div>
      </div>
    )
  }
}
