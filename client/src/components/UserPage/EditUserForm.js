import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class EditUserForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
        <Input type='text' name='name' 
        value={this.props.user.name} 
        onChange={this.props.handleChange} 
        />
        <Input type='submit' value='Update User'/>
        </form>
      </div>
    )
  }
}
