import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewChallengeForm from './NewChallengeForm';
import ChallengeInfo from './ChallengeInfo';

export default class ChallengeList extends Component {
  state = {
    foodChallenges: [],
    newChallenge: {
      address: '',
      fatness_points: '',
      location: '',
      name: '',
      price: '',
      state: '',
      time: ''
    },
    createChallenge: false

  }

  componentDidMount = async () => {
    await this.getFoodChallenges()
  }

  toggleCreateChallenge = () => {
    this.setState({ createChallenge: !this.state.createChallenge })
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
    await axios.delete(`/api/challenges/${challengeId}`)
    await this.getFoodChallenges()
  }
  goBackHome = () => {
    const userId = this.props.match.params.userId
    this.props.history.push(`/users/${userId}`)
  }

  render() {


    const foodChallengeList = <ChallengeInfo
      userId={this.props.match.params.userId}
      foodChallenges={this.state.foodChallenges}
      handleDelete={this.handleDelete}
      goBackHome={this.goBackHome}
    />

    const newChallengeForm =
      <NewChallengeForm
        handleSubmit={this.handleSubmit}
        newChallenge={this.state.newChallenge}
        handleChange={this.handleChange}
      />

    return (
      <div>
        {this.state.createChallenge ? newChallengeForm : foodChallengeList}
        <button onClick={this.toggleCreateChallenge}>
          {this.state.createChallenge ? 'All Challenges' : 'Create Challenge'}
        </button>
      </div>
    )
  }
}
