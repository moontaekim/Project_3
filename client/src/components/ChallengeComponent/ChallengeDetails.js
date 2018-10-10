import React, { Component } from 'react'

export default class ChallengeDetails extends Component {
  render() {
    const foodChallenge = this.props.foodChallenge
    return (
      <div>
        <div>{foodChallenge.name}</div>
        <div>location: {foodChallenge.location}</div>
        <div>address: {foodChallenge.address}</div>
        <div>state: {foodChallenge.state}</div>
        <div>difficulty: {foodChallenge.difficulty}</div>
        <div>price: $ {foodChallenge.price}</div>
        <button onClick={this.addToComplete}>complete</button>
        <button>failed</button>
      </div>
    )
  }
}
