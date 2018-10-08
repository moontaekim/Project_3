import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  state = {
    users: []
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    console.log(response)
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
