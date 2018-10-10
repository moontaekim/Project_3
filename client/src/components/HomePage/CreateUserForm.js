import React, { Component } from 'react'

export default class CreateUserForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="name" value={this.props.newUser.name} onChange={this.props.handleChange}/>
          <input type='submit' value='Create New Fatty'/>
        </form>
      </div>
    )
  }
}
