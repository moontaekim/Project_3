import React, { Component } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo';
import UserCompletedChallenges from './UserCompletedChallenges';
import EditUserForm from './EditUserForm';
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'

const StyledButton = styled(Button)`
&&&{
  background:white;
  box-shadow:3px 4px 1px black;
  :hover{
    box-shadow: 0 0 0 white;
  }
}
`
export default class UserPage extends Component {
  state = {
    user: {},
    completedChallenges: [],
    failedChallenges:["asdfa"],
    editUser: false
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data, 
      completedChallenges: response.data.completedChallenges
    })
  }

  failedChallengesList = async () => {
    const response = await axios.get(`/api/challenges`)
    console.log(response)
    this.setState({failedChallenges: response.data.price})
  }

  componentDidMount = () => {
    this.getUser()
    this.failedChallengesList()
    }

  goBackHome = () => {
    this.props.history.push(`/users`)
    }

  toggleEditUser = () => {
    this.setState({editUser: !this.state.editUser})
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
    this.goBackHome()
  }
 
  render() {

    const fatness = this.state.completedChallenges.map((challenge) => challenge.fatness_points).reduce((acc, curVal) => acc += curVal, 0)
    const money = this.state.completedChallenges.map((challenge) => challenge.price)

    const editUserForm = 
    <EditUserForm
    handleSubmit={this.handleSubmit}
    user={this.state.user}
    handleChange={this.handleChange}
    />

    const userpage = 
    <div>
    <UserInfo
    user={this.state.user}
    fatness={fatness}
    getUser={this.getUser}
    />
    <UserCompletedChallenges
    completedChallenges={this.state.completedChallenges}
    />
    </div>
  
    return (
      <div>
        {this.state.editUser ? editUserForm : userpage}
        <StyledButton circular onClick={this.toggleEditUser}>
          {this.state.editUser ? 'User Info' : 'Edit User'}
        </StyledButton>
      </div>
    )
  }
}
