import React, { Component } from 'react'

export default class NewChallengeForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "name" name="name" value={this.state.newChallenge.name} onChange={this.handleChange}/>
          <input type="text" placeholder= "location" name="location" value={this.state.newChallenge.location} onChange={this.handleChange}/>
          <input type="text" placeholder= "address" name="address" value={this.state.newChallenge.address} onChange={this.handleChange}/>
          <input type="text" placeholder= "price" name="price" value={this.state.newChallenge.price} onChange={this.handleChange}/>
          <input type="text" placeholder= "difficulty" name="difficulty" value={this.state.newChallenge.difficulty} onChange={this.handleChange}/>
          <input type="text" placeholder= "state" name="state" value={this.state.newChallenge.state} onChange={this.handleChange}/>
          <input type="text" placeholder= "time" name="time" value={this.state.newChallenge.time} onChange={this.handleChange}/>
          <input type='submit' value='Create New Challenge'/>
        </form>
      </div>
    )
  }
}
