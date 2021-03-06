import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class EditUserForm extends Component {
  state = {
    user: {}
  }

  handleChange = (event) => {
    const user = {...this.state.user.name}
    user[event.target.name]= event.target.value
    this.setState({ user })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
        <input type='text' name='name' 
        value={this.state.user.name} 
        onChange={this.handleChange} 
        />
        <Input type='submit' value='Update User'/>
        </form>
      </div>
    )
  }
}
