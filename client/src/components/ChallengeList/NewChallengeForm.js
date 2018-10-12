import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import styled from 'styled-components'

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
const StyledForm = styled(Form)`
  width: 70%;
  margin: auto;
`
export default class NewChallengeForm extends Component {
  render() {
    return (
      <div>
        <StyledForm onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder= "name" name="name" value={this.props.newChallenge.name} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "location" name="location" value={this.props.newChallenge.location} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "Image URL" name="img" value={this.props.newChallenge.img} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "address" name="address" value={this.props.newChallenge.address} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "price" name="price" value={this.props.newChallenge.price} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "fatness points" name="fatness_points" value={this.props.newChallenge.fatness_points} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "state" name="state" value={this.props.newChallenge.state} onChange={this.props.handleChange}/>
          <input type="text" placeholder= "time" name="time" value={this.props.newChallenge.time} onChange={this.props.handleChange}/>
          <StyledButton circular type='submit'>Create New Challenge</StyledButton>
        </StyledForm>
      </div>
    )
  }
}
