import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <Link to="/" onClick={() => this.handleDelete(this.props.user._id)}>delete</Link>
        <div>Name: {this.props.user.name}</div>
        <div>Budget: $ {this.props.user.budget}</div>
        <div>Fatness: {this.props.user.fatness}</div>
        <Link to={`/users/${this.props.user._id}/challenges`}>Food Challenges</Link>
      </div>
    )
  }
}
