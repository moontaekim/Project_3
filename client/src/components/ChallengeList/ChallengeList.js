import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewChallengeForm from './NewChallengeForm';

export default class ChallengeList extends Component {
  state = {
    foodChallenges: [],
    newChallenge: {
      address: '',
      difficulty: '',
      location: '',
      name: '',
      price: '',
      state: '',
      time: ''
    }
  }

  componentDidMount = async () => {
    await this.getFoodChallenges()
  }

  getFoodChallenges = async () => {
    const response = await axios.get(`/api/challenges`)
    this.setState({ foodChallenges: response.data })
  }

  handleChange = (event) => {
    const newChallenge = { ...this.state.newChallenge }
    newChallenge[event.target.name] = event.target.value
    this.setState({ newChallenge })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('/api/challenges', this.state.newChallenge)
    this.getFoodChallenges()
  }

  handleDelete = async (challengeId) => {
    console.log(challengeId)
    await axios.delete(`/api/challenges/${challengeId}`)
    await this.getFoodChallenges()
  }

  render() {
    const foodChallengeList = this.state.foodChallenges.map((foodChallenge, i) => {
      return (
        <div key={i}>
          <Link to={`/users/${this.props.match.params.userId}/challenges/${foodChallenge._id}`}>name: {foodChallenge.name}</Link>
          <button onClick={() => this.handleDelete(foodChallenge._id)}>delete</button>
        </div>
      )
    })

    return (
      <div>
        {foodChallengeList}
        <NewChallengeForm
          handleSubmit={this.handleSubmit}
          newChallenge={this.state.newChallenge}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}
