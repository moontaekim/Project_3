import React, { Component } from 'react'

export default class EditUserForm extends Component {
  render() {
    return (
      <div>
            
    <form onSubmit={this.props.handleSubmit}>
      <input type='text' name='name' 
      value={this.props.userToUpdate.name} 
      onChange={this.props.handleChange} 
      />
      <input type='submit' value='Update User'/>
    </form>
    </div>
      
    )
  }
}
