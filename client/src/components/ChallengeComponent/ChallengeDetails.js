import React, { Component } from 'react'

export default class ChallengeDetails extends Component {
  render() {
    const foodChallenge = this.props.foodChallenge
    return (
      <div>
        <div>{foodChallenge.name}</div>
        <div>Location: {foodChallenge.location}</div>
        <div>Address: {foodChallenge.address}</div>
        <div>State: {foodChallenge.state}</div>
        <div>Fatness Points: {foodChallenge.fatness_points}</div>
        <div>Price: $ {foodChallenge.price}</div>
        <button onClick={this.props.addToComplete}>complete</button>
        <button>failed</button>
      </div>
    )
  }
}
