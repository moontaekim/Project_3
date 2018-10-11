import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card, CardContent, Image } from 'semantic-ui-react'

const CardName = styled(Card.Header)`
  &&&{
  font-size: 60px;
  }
`
const StyledCard = styled(Card)`
  &&&{
    margin:auto;
    box-shadow:0 0px 16px 0 #d4d4d5, 3px -1px 5px 1px #d4d4d5;
  }
`
const StyledLink = styled(Link)`
  color:black;
:hover{
  background:black;
  color:white;
}
`

export default class UserInfo extends Component {

  handleDelete = async (userId) => {
    await axios.delete(`/api/users/${userId}`)
    await this.props.getUser()
  }
  render() {
    return (
      <StyledCard>
        <Image src="https://img.clipartxtras.com/fb348ffcc0c931a4c600fedbd96403ba_thin-fat-cliparts-free-download-clip-art-free-clip-art-on-fat-and-thin-clipart-black-and-white_1512-1111.jpeg"/>
        <CardContent>
          <CardName>{this.props.user.name}</CardName>
          <Card.Description>Budget: $ {this.props.user.budget}</Card.Description>
          <Card.Description>Fatness: {this.props.fatness}</Card.Description>
        </CardContent>
        <StyledLink to={`/users/${this.props.user._id}/challenges`}>Food Challenges</StyledLink>
        <StyledLink to={`/users/`}> go back </StyledLink>
        <StyledLink to="/users" onClick={() => this.handleDelete(this.props.user._id)}>delete</StyledLink>
      </StyledCard>
    )
  }
}
