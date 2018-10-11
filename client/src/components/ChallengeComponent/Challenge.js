import React, { Component } from 'react'
import axios from 'axios'
import Timer from './Timer/Timer';
import StartButton from './Timer/StartButton';
import ChallengeDetails from './ChallengeDetails';

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
  // await this.getFoodChallenges()
  this.goBackHome()
}

render() {
  return (
    <div>
      <img src={this.state.foodChallenge.img} alt="vortex"/>
      <ChallengeDetails
        foodChallenge={this.state.foodChallenge}
        addToComplete={this.addToComplete}
      />
      <Timer
        foodChallenge={this.state.foodChallenge}
        seconds={this.state.seconds} />
      <StartButton/>
      <button onClick={() => { this.goBackHome() }}> go back </button>
      <button onClick={() => this.handleDelete(this.state.foodChallenge._id)}>delete</button>
    </div>
  )
}
}
