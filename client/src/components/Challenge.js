import React, { Component } from 'react'
import axios from 'axios'
import Timer from './Timer';

export default class Challenge extends Component {

state = {
  foodChallenge: []
}

componentDidMount = async () => {
  const userId = this.props.match.params.userId
  const challengeId = this.props.match.params.id
  const response = await axios.get(`/api/users/${userId}/challenges/${challengeId}`)
  console.log(response.data)
  this.setState({foodChallenge: response.data})
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
        <div>time limit: {foodChallenge.time}min</div>
        <Timer/>
      </div>
    )
  }
}
