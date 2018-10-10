import React, { Component } from 'react'

export default class UserCompletedChallenges extends Component {
  render() {
        
    const completedChallengesList = this.props.completedChallenges.map((challenge, i) => {
      return(
        <div key={i}>
          <div>{challenge.name}</div>
        </div>
      )
    })
    return (
      <div>
        <div>Completed Challenges: {completedChallengesList}</div>
      </div>
    )
  }
}
