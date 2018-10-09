import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditUserForm from './EditUserForm';

export default class UserPage extends Component {
  state = {
    user: {},
    editUser: false,
    userToUpdate: {}
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    console.log(userId)
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({user: response.data, userToUpdate: response.data})
  }

  componentDidMount = () => {
    this.getUser()
  }

  toggleEditUser = () => {
    this.setState({editUser: !this.state.editUser})
  }

  handleDelete = async (someId) => {
    await axios.delete(`/api/users/${someId}`)
    await this.getUser()
  }
  
  handleChange = (event) => {
    const userToUpdate = {...this.state.userToUpdate.name}
    userToUpdate[event.target.name]= event.target.value
    console.log(event.target.value)
    this.setState({ userToUpdate })
  }
  
  handleSubmit = async (event) => {
    const userId = this.props.match.params.userId
    event.preventDefault()
    await axios.put(`/api/users/${userId}`, this.state.userToUpdate)
  }

  render() {

    const editUserForm = <EditUserForm
      user={this.state.user}
      userToUpdate={this.state.userToUpdate}
      onSubmit={this.handleSubmit}
      value={this.state.userToUpdate.name} 
      onChange={this.handleChange} 
    />

    const userpage = 
      <div>
      <Link to="/" onClick={() => this.handleDelete(this.state.user._id)}>delete</Link>
      <div>Name: {this.state.user.name}</div>
      <div>Budget: $ {this.state.user.budget}</div>
      <div>Fatness: {this.state.user.fatness}</div>
      <Link to={`/users/${this.state.user._id}/challenges`}>Food Challenges</Link>
      <div><Link to={`/users/${this.state.user._id}/completed`}>Completed Challenges</Link></div>
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
