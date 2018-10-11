import React, { Component } from 'react'
import axios from 'axios'
import Timer from './Timer/Timer';
import StartButton from './Timer/StartButton';
import ChallengeDetails from './ChallengeDetails';

export default class Challenge extends Component {

  state = {
    foodChallenge: [],
    completedChallenge: [],
    seconds: "00"
  }

  componentDidMount = async () => {
    const challengeId = this.props.match.params.id
    const response = await axios.get(`/api/challenges/${challengeId}`)
    console.log(response.data)
    this.setState({ foodChallenge: response.data })
  }

  addToComplete = async () => {
    const userId = this.props.match.params.userId
    const challengeId = this.props.match.params.id
    await axios.post(`/api/users/${userId}/challenges/${challengeId}`, challengeId)
  }

  render() {
    return (
      <div>
        <ChallengeDetails 
        foodChallenge={this.state.foodChallenge}
        addToComplete={this.addToComplete}
        />
        <Timer foodChallenge={this.state.foodChallenge} seconds={this.state.seconds}/>
        <StartButton />
      </div>
    )
  }
}
