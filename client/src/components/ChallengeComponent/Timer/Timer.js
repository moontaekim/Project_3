import React, { Component } from 'react'

export default class Timer extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.foodChallenge.time}:{this.props.seconds} </h1>
      </div>
    )
  }
}
