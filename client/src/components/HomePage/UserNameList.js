import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserNameList extends Component {
  render() {
    const usersList = this.props.users.map((user, i) => {
      return(
        <div key={i}>
          <Link to={`/users/${user._id}`}>name: {user.name}</Link>
        </div>
      )
    })
    return (
      <div>
        {usersList}
      </div>
    )
  }
}
