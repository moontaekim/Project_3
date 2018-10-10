import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ChallengeList extends Component {
  state = {
    foodChallenges:[],
    newChallenge:{
      address:'',
      difficulty:'',
      location:'',
      name:'',
      price:'',
      state:'',
      time:''
    }
  }

  componentDidMount = async () => {
    const response = await axios.get(`/api/challenges`)
    this.setState({foodChallenges: response.data})
  }

  handleChange = (event) => {
    const newChallenge = {...this.state.newChallenge}
    newChallenge[event.target.name] = event.target.value
    this.setState({ newChallenge })
  }

  render() {
    const foodChallengeList = this.state.foodChallenges.map((foodChallenge, i) => {
      return(
        <div key={i}>
          <Link to={`/users/${this.props.match.params.userId}/challenges/${foodChallenge._id}`}>name: {foodChallenge.name}</Link>
        </div>
      )
    })

    return (
      <div>
        {foodChallengeList}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.newChallenge.name} onChange={this.handleChange}/>
          <input type="text" name="location" value={this.state.newChallenge.location} onChange={this.handleChange}/>
          <input type="text" name="address" value={this.state.newChallenge.address} onChange={this.handleChange}/>
          <input type="text" name="price" value={this.state.newChallenge.price} onChange={this.handleChange}/>
          <input type="text" name="difficulty" value={this.state.newChallenge.difficulty} onChange={this.handleChange}/>
          <input type="text" name="state" value={this.state.newChallenge.state} onChange={this.handleChange}/>
          <input type="text" name="time" value={this.state.newChallenge.time} onChange={this.handleChange}/>
          <input type='submit' value='Create New Challenge'/>
        </form>
      </div>
    )
  }
}
