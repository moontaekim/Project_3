import React, { Component } from 'react'

export default class StartButton extends Component {
  render() {
    return (
      <div>
               <button onClick={this.props.startCountDown}>Start</button>
      </div>
    )
  }
}
