import React, { Component } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo';
import UserCompletedChallenges from './UserCompletedChallenges';
import EditUserForm from './EditUserForm';
import styled from 'styled-components'


const StyledImage = styled.img`
  width:100vw;
  height:52vw;
`

export default class UserPage extends Component {
  state = {
    user: {},
    completedChallenges: [],
    editUser: false
  }


  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({user: response.data, completedChallenges: response.data.completedChallenges})
  }

  componentDidMount = () => {
    this.getUser()
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
  goBackHome = () => {
    this.props.history.push(`/users`)
  }
  render() {
    const editUserForm = 
    <EditUserForm
    handleSubmit={this.handleSubmit}
    user={this.state.user}
    handleChange={this.handleChange}
    />

    const userpage = 
    <div>
    <UserInfo
    handleDelete={this.handleDelete}
    user={this.state.user}
    goBackHome={this.goBackHome}
    />
    <UserCompletedChallenges
    completedChallenges={this.state.completedChallenges}
    />
    </div>
  
    return (
      <div>
        <StyledImage src="https://img.clipartxtras.com/fb348ffcc0c931a4c600fedbd96403ba_thin-fat-cliparts-free-download-clip-art-free-clip-art-on-fat-and-thin-clipart-black-and-white_1512-1111.jpeg" alt="skinny to fat"/>
        {this.state.editUser ? editUserForm : userpage}
        <button onClick={this.toggleEditUser}>
          {this.state.editUser ? 'User Info' : 'Edit User'}
        </button>
      </div>
    )
  }
}
