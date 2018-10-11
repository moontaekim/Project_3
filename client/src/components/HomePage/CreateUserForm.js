import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class CreateUserForm extends Component {
  state = {
    newUser: {}
  }
  
  handleSubmit = async (event) => {
    event.preventDefault()
    this.props.addUser(this.state.newUser)
    this.props.toggleCreateUser()
  }

  handleChange = (event) => {
    const newUser = {...this.state.newUser}
    newUser[event.target.name]= event.target.value
    this.setState({ newUser })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input focus type="text" name="name" value={this.state.newUser.name} onChange={this.handleChange}/>
          <input type='submit' value='Create New Fatty'/>
        </form>
      </div>
    )
  }
}
