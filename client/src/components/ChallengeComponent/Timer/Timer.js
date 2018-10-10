import React, { Component } from 'react'

export default class Timer extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.foodChallenge.minutes}:{this.props.seconds} </h1>
      </div>
    )
  }
}
