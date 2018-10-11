import React, { Component } from 'react'
import axios from 'axios'
import Timer from './Timer/Timer';
import StartButton from './Timer/StartButton';
import ChallengeDetails from './ChallengeDetails';
import { Button, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
&&&{
  margin-top:30px;
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
    completedChallenge: [],
    seconds: "00",
    minutes: ''
  }


componentDidMount = async () => {
  const challengeId = this.props.match.params.id
  const response = await axios.get(`/api/challenges/${challengeId}`)
  console.log(response.data)
  this.setState({ foodChallenge: response.data, minutes: response.data.time })
}

addToComplete = async () => {
  const userId = this.props.match.params.userId
  const challengeId = this.props.match.params.id
  await axios.post(`/api/users/${userId}/challenges/${challengeId}`, challengeId)
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
      />
      <Timer
        foodChallenge={this.state.foodChallenge}
        seconds={this.state.seconds} />
      <StartButton/>
      <StyledButton circular onClick={() => { this.goBackHome() }}> go back </StyledButton>
      <StyledButton circular onClick={() => this.handleDelete(this.state.foodChallenge._id)}>delete</StyledButton>
    </div>
  )
}
}
