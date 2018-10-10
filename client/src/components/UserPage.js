import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserPage extends Component {
  state = {
    user: {},
    editUser: false
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({user: response.data})
  }

  getCompletedChallenges = async () => {
    const userId = this.props.match.params.userId
    //completedChallenges is an array
    const challengeId = this.state.user.completedChallenges
    // .map((challenge , i) => {
    //   return challenge[i]
    // })
    const response = await axios.get(`/api/users/${userId}/challenges/${challengeId}`)
    console.log(response)
    console.log(challengeId)

  }

  componentDidMount = () => {
    this.getUser()
    this.getCompletedChallenges()
  }

  toggleEditUser = () => {
    this.setState({editUser: !this.state.editUser})
  }

  handleDelete = async (userId) => {
    await axios.delete(`/api/users/${userId}`)
    await this.getUser()
  }
  
  handleChange = (event) => {
    const user = {...this.state.user.name}
    user[event.target.name]= event.target.value
    this.setState({ user })
  }
  
  handleSubmit = async (event) => {
    const userId = this.props.match.params.userId
    event.preventDefault()
    await axios.put(`/api/users/${userId}`, this.state.user)
  }

  render() {

    const editUserForm = 
    <div>
      <form onSubmit={this.handleSubmit}>
      <input type='text' name='name' 
      value={this.state.user.name} 
      onChange={this.handleChange} 
      />
      <input type='submit' value='Update User'/>
      </form>
    </div>

    const userpage = 
      <div>
      <Link to="/" onClick={() => this.handleDelete(this.state.user._id)}>delete</Link>
      <div>Name: {this.state.user.name}</div>
      <div>Budget: $ {this.state.user.budget}</div>
      <div>Fatness: {this.state.user.fatness}</div>
      <Link to={`/users/${this.state.user._id}/challenges`}>Food Challenges</Link>
      <div>Completed Challenges: {this.state.user.completedChallenges}</div>
      </div>

    return (
      <div>

        {this.state.editUser ? editUserForm : userpage}
        <button onClick={this.toggleEditUser}>
          {this.state.editUser ? 'User Info' : 'Edit User'}
        </button>

      </div>
    )
  }
}
