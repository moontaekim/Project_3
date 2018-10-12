import React, { Component } from 'react'
import axios from 'axios'
import Timer from './Timer/Timer';
import ChallengeDetails from './ChallengeDetails';
import { Button, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
&&&{
  margin-top:15px;
  background:white;
  box-shadow:3px 4px 1px black;
  :hover{
    box-shadow: 0 0 0 white;
  }
}
`
const StyledImage = styled(Image)`
  margin:auto;
  border: 3px solid white;
`

export default class Challenge extends Component {

  state = {
    foodChallenge: [],
    // completedChallenge: [],
    seconds: "00",
    // minutes: ''
  }

componentDidMount = async () => {
  const challengeId = this.props.match.params.id
  const response = await axios.get(`/api/challenges/${challengeId}`)
  this.setState({ foodChallenge: response.data, minutes: response.data.time })
}

addToComplete = async () => {
  const userId = this.props.match.params.userId
  const challengeId = this.props.match.params.id
  await axios.post(`/api/users/${userId}/challenges/${challengeId}`, challengeId)
  this.goBackToUser()
}

//why do i have to click failed twice for it to update and save?? Ill work on this on my own time
// failedChallenge =  async (event) => {
//   event.preventDefault()
//   const failedChallenge = {...this.state.foodChallenge}
//   failedChallenge.failed = !failedChallenge.failed
//   this.setState({foodChallenge: failedChallenge})
//   const userId = this.props.match.params.userId
//   const challengeId = this.props.match.params.id
//   console.log(this.state.foodChallenge)
//   await axios.put(`/api/users/${userId}/challenges/${challengeId}`, this.state.foodChallenge)
// }

goBackToUser = () => {
  const userId = this.props.match.params.userId
  this.props.history.push(`/users/${userId}`)
}

goBackHome = () => {
  const userId = this.props.match.params.userId
  this.props.history.push(`/users/${userId}/challenges`)
}
handleDelete = async (challengeId) => {
  await axios.delete(`/api/challenges/${challengeId}`)
  this.goBackHome()
}

render() {
  return (
    <div>
      <StyledImage size="medium" circular src={this.state.foodChallenge.img} alt="foodimage"/>
      <ChallengeDetails
        foodChallenge={this.state.foodChallenge}
        addToComplete={this.addToComplete}
        // failedChallenge={this.failedChallenge}
      />
      <Timer
        foodChallenge={this.state.foodChallenge}
        seconds={this.state.seconds} />
      {/* <StartButton/> */}
      <StyledButton circular onClick={() => { this.goBackHome() }}> go back </StyledButton>
      <StyledButton circular onClick={() => this.handleDelete(this.state.foodChallenge._id)}>delete</StyledButton>
    </div>
  )
}
}
