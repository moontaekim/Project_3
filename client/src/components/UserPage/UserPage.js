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
    // failedChallenges: [],
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

  //Ill be working on this function later on

  // failedChallenges = async() => {
  //   const userId = this.props.match.params.userId
  //   const response = await axios.get(`/api/users/${userId}`)
  //   const hello = response.data.foodChallenges.map((challenge) => {
  //     return  axios.get(`/api/user/${userId}/challenges/${challenge}`)   
  //    })
    //get challenge information based on Id
    //if there is a failed = true then push that into failedChallenges array
    // await axios.get(`/api/user/${userId}/challenges/${hello}`)
    // console.log(hello)
  // }

  componentDidMount = () => {
    this.getUser()
    // this.failedChallenges()
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
