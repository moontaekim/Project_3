import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const StyledLink = styled(Link)`
  color: white;
  line-height:40px;
  font-family: 'Modak', cursive;
  font-size: 20px;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px black;
  :hover{
    color: black;
    text-shadow: 2px 2px 2px white;
  }
`

export default class ChallengeInfo extends Component {
  render() {
    const foodChallengeList = this.props.foodChallenges.map((foodChallenge, i) => {
      return (
        <div key={i}>
          <StyledLink to={`/users/${this.props.userId}/challenges/${foodChallenge._id}`}>{foodChallenge.name}</StyledLink>
          {/* <div><Button onClick={() => this.props.handleDelete(foodChallenge._id)}>delete</Button></div> */}
        </div>
      )
    })
    return (
      <div>
        {foodChallengeList}
        <button onClick={() => { this.props.goBackHome() }}> go back </button>
      </div>
    )
  }
}
