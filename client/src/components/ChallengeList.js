import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ChallengeList extends Component {
  state = {
    foodChallenges:[]
  }

  componentDidMount = async () => {
    const response = await axios.get(`/api/challenges`)
    this.setState({foodChallenges: response.data})
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
      </div>
    )
  }
}
