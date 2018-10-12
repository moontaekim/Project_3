import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
  font-family: 'Modak', cursive;
  color: white;
  text-shadow: 2px 2px 2px black;
  font-size: 20px;
  padding-top: 15px;
`

export default class ChallengeDetails extends Component {
  render() {
    const foodChallenge = this.props.foodChallenge
    return (
      <div>
        <StyledDetails>{foodChallenge.name}</StyledDetails>
        <div>Location: {foodChallenge.location}</div>
        <div>Address: {foodChallenge.address}</div>
        <div>State: {foodChallenge.state}</div>
        <div>Fatness Points: {foodChallenge.fatness_points}</div>
        <div>Price: $ {foodChallenge.price}</div>
        <button onClick={this.props.addToComplete}>complete</button>
        <button onClick={this.props.failedChallenge}>failed</button>
      </div>
    )
  }
}
