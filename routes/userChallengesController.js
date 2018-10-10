const router = require('express').Router({mergeParams: true})
const { User, FoodChallenge } = require('../db/schema')

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

router.post('/:id', async(req, res) => {
  const user = await User.findById(req.params.userId)
  const completedChallenge = await FoodChallenge.findById(req.params.id)
  user.completedChallenges.push(completedChallenge)
  const updatedUser = await user.save()
  res.send(updatedUser)
})



module.exports = router