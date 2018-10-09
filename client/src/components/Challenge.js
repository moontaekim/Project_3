import React, { Component } from 'react'
import axios from 'axios'
import Timer from './Timer/Timer';
import StartButton from './Timer/StartButton';

export default class Challenge extends Component {

state = {
  user:{1:1},
  foodChallenge: [],
  completedChallenge: [],
  seconds: "00"
}


componentDidMount = async () => {
  const userId = this.props.match.params.userId
  const challengeId = this.props.match.params.id
  const response = await axios.get(`/api/users/${userId}/challenges/${challengeId}`)
  console.log(response.data)
  this.setState({foodChallenge: response.data})
}

addToComplete = () => {
  const userId = this.props.match.params.userId
  const complete = this.state.completedChallenge.push(userId)
  this.setState({completedChallenge: complete})
}

  render() {
    const foodChallenge = this.state.foodChallenge
    return (
      <div>
        <div>{foodChallenge.name}</div>
        <div>location: {foodChallenge.location}</div>
        <div>address: {foodChallenge.address}</div>
        <div>state: {foodChallenge.state}</div>
        <div>difficulty: {foodChallenge.difficulty}</div>
        <div>price: $ {foodChallenge.price}</div>
        <div>

        <Timer minutes={foodChallenge.time} seconds={this.state.seconds}/>
        <StartButton/>
        
        </div>
        <button onClick={this.addToComplete}>complete</button>
        <button>failed</button>

      </div>

    )
  }
}
