import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ChallengeInfo extends Component {
  render() {
    const foodChallengeList = this.props.foodChallenges.map((foodChallenge, i) => {
      return (
        <div key={i}>
          <Link to={`/users/${this.props.userId}/challenges/${foodChallenge._id}`}>{foodChallenge.name}</Link>
          <button onClick={() => this.props.handleDelete(foodChallenge._id)}>delete</button>
        </div>
      )
    })
    return (
      <div>
        {foodChallengeList}
        <button onClick={() => { this.props.goBackHome() }}> go back </button>
      </div>
    )
  }
}
