import React, { Component } from 'react'

export default class NewChallengeForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder= "name" name="name" value={this.props.newChallenge.name} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "location" name="location" value={this.props.newChallenge.location} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "address" name="address" value={this.props.newChallenge.address} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "price" name="price" value={this.props.newChallenge.price} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "fatness points" name="fatness_points" value={this.props.newChallenge.fatness_points} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "state" name="state" value={this.props.newChallenge.state} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "time" name="time" value={this.props.newChallenge.time} onChange={this.props.handleChange}/>
          <input type='submit' value='Create New Challenge'/>
        </form>
      </div>
    )
  }
}
