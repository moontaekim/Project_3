const router = require('express').Router({mergeParams: true})
const { FoodChallenge, User } = require('../db/schema')

router.get('/', async(req, res) => {
  const user = await User.findById(req.params.userId).populate('foodChallenges')
  const foodChallenges = user.foodChallenges
  res.send(foodChallenges)
})

router.get('/:id', async(req, res) => {
  const user = await User.findById(req.params.userId).populate('foodChallenges')
  const foodChallenges = user.foodChallenges.find(foodChallenge => {
    return foodChallenge._id == req.params.id
  })
  res.send(foodChallenges)
})
module.exports = router