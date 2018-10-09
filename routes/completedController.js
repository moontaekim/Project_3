const router = require('express').Router({mergeParams: true})
const { FoodChallenge, User } = require('../db/schema')

router.get('/', async(req, res) => {
  const user = await User.findById(req.params.userId).populate('completedChallenges')
  const completedChallenges = user.completedChallenges
  res.send(completedChallenges)
})

module.exports = router