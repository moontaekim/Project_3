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
const StyledButton = styled(Button)`
&&&{
  margin-top:30px;
  background:white;
  box-shadow:3px 4px 1px black;
  :hover{
    box-shadow: 0 0 0 white;
  }
}
`

export default class ChallengeInfo extends Component {
  render() {
    const foodChallengeList = this.props.foodChallenges.map((foodChallenge, i) => {
      return (
        <div key={i}>
          <StyledLink to={`/users/${this.props.userId}/challenges/${foodChallenge._id}`}>{foodChallenge.name}</StyledLink>
        </div>
      )
    })
    return (
      <div>
        {foodChallengeList}
        <StyledButton circular onClick={() => { this.props.goBackHome() }}> go back </StyledButton>
      </div>
    )
  }
}
