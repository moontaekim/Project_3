import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledUserList = styled(Link)`
  text-decoration:none;
  font-size: 30px;
  font-family: 'Modak',cursive;
  line-height: 50px;
  color:white;
    text-shadow:2px 1px 2.5px black;
  :hover{
    color: black;
    text-shadow:2px 1px 2.5px white;
  }
`

export default class UserNameList extends Component {
  render() {
    const usersList = this.props.users.map((user, i) => {
      return (
        <div key={i}>
          <StyledUserList to={`/users/${user._id}`}>{user.name}</StyledUserList>
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
